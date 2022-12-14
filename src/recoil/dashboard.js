import { atom, selector } from 'recoil';
import { endDateAtom, startDateAtom } from './datepicker';
import { AD_STATUS_TEMPLATE } from '../constant/template';
import { getDiffOfTime, getTimeOfPast } from '../utils/time';
import {
  getNameOfAdStatus,
  getVariationsOfAdStatus,
  getUnitOfAdStatus,
  getValueWithKoreanUnit,
} from '../utils/get';

const adStatusListAtom = atom({
  key: 'adStatusList',
  default: [],
});

/**
 * filteredAdStatusListSelector : startDate 로부터 3일 전 ~ endDate로부터 3일 후 내의 데이터이면 필터링
 * - get: 시작 날짜로부터 현재 선택한 기간만큼의 차이
 *  증감율 계산 ((최신 - 과거) / 과거) * 100
 *  최신 - 과거 -> 증감 금액 계산
 */
const filteredAdStatusListSelector = selector({
  key: 'filterAdStatusList',
  get: ({ get }) => {
    const adStatusList = get(adStatusListAtom);
    const startDate = get(startDateAtom);
    const endDate = get(endDateAtom);

    const diff = getDiffOfTime(startDate, endDate);
    const timeOfPast = getTimeOfPast(startDate, diff + 1);

    const timeOfEndDate = endDate.getTime() + 1000 * 60 * 60 * 24;
    const timeOfStartDate = startDate.getTime();

    const prevAdStatus = adStatusList.filter(adStatus => {
      const adStatusTime = new Date(adStatus.date).getTime();
      return timeOfPast <= adStatusTime && adStatusTime <= timeOfStartDate;
    });

    const thisAdStatus = adStatusList.filter(adStatus => {
      const adStatusTime = new Date(adStatus.date).getTime();
      return timeOfStartDate <= adStatusTime && adStatusTime <= timeOfEndDate;
    });

    const adStatusDataToShow = AD_STATUS_TEMPLATE.map(key => {
      const currSum = thisAdStatus
        .map(data => data[key])
        .reduce((acc, cur) => acc + cur, 0);
      const prevSum = prevAdStatus
        .map(data => data[key])
        .reduce((acc, cur) => acc + cur, 0);

      return {
        key,
        name: getNameOfAdStatus(key),
        currSum: getValueWithKoreanUnit(key, currSum),
        variations: getVariationsOfAdStatus(key, prevSum, currSum),
        isDecreased: getVariationsOfAdStatus(key, prevSum, currSum).includes(
          '-'
        ),
        unit: getUnitOfAdStatus(key),
      };
    });

    return adStatusDataToShow;
  },
});

// Graph
const graphSelector = selector({
  key: 'graph',
  get: ({ get }) => {
    const adStatusList = get(adStatusListAtom);
    const timeOfStartDate = get(startDateAtom).getTime();
    const timeOfEndDate = get(endDateAtom).getTime() + 1000 * 60 * 60 * 24;

    const filtered = adStatusList.filter(statusItem => {
      const timeOfStatusItem = new Date(statusItem.date).getTime();
      return (
        timeOfStartDate <= timeOfStatusItem && timeOfStatusItem <= timeOfEndDate
      );
    });
    return {
      labels: filtered.map(statusItem => statusItem.date),
      roas: filtered.map(statusItem => statusItem.roas),
      cost: filtered.map(statusItem => statusItem.cost),
      imp: filtered.map(statusItem => statusItem.imp),
      click: filtered.map(statusItem => statusItem.click),
      cvr: filtered.map(statusItem => statusItem.cvr),
      convValue: filtered.map(statusItem => statusItem.convValue),
    };
  },
});

const graphOptionsAtom = atom({
  key: 'graphOptionsAtom',
  default: ['roas', 'cost'],
});

const graphOptionsSelector = selector({
  key: 'graphOptionSelector',
  get: ({ get }) => {
    const graphOptions = get(graphOptionsAtom);
    return graphOptions;
  },
  set: ({ set }, optionArray) => {
    if (optionArray[0] === optionArray[1])
      set(graphOptionsAtom, [optionArray[0], '']);
    else set(graphOptionsAtom, optionArray);
  },
});

export {
  adStatusListAtom,
  graphOptionsAtom,
  filteredAdStatusListSelector,
  graphSelector,
  graphOptionsSelector,
};
