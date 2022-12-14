import React from 'react';
import styled from 'styled-components';
import { IconGuide, IconMenu01Off, IconMenu02Off, logo } from '../../assets';
import { Link, useLocation } from 'react-router-dom';
import {
  FlexBox,
  FlexStyle,
  GrayFontParagraph,
  GrayFontStyle,
} from '../../style/common.style';
import CustomSelect from '../select/CustomSelect';

const SideNavigation = () => {
  const location = useLocation();
  const isPathDashboard = location.pathname === '/';
  const isPathAdManagement = location.pathname === '/management';
  return (
    <SideNavigationLayout>
      <SideNavigationHeader>
        <LogoImageBox>
          <img src={logo} alt="LEVER" />
        </LogoImageBox>
      </SideNavigationHeader>
      <SideNavigationSection
        flexDirection="column"
        justifyContent="space-between"
      >
        <section>
          <section>
            <NavTitleH3>서비스</NavTitleH3>
            {/* TODO: react-select */}
            <CustomSelect
              placeholder="서비스 선택하기"
              options={[
                { label: '매드업', value: 'madup' },
                { label: '서비스 추가하기', value: 'add' },
              ]}
              padding="1.2rem 1rem"
              marginBottom="5.5rem"
            />
          </section>
          <section>
            <NavTitleH3>광고 센터</NavTitleH3>
            <AdvertisingCenterNav flexDirection="column" gap="0.2rem">
              <NavLink to="/" className={isPathDashboard && 'active'}>
                <FlexBox alignItems="center" gap="1.2rem">
                  <IconMenu01Off width="2rem" height="2rem" />
                  <span>대시보드</span>
                </FlexBox>
              </NavLink>
              <NavLink
                to="/management"
                className={isPathAdManagement && 'active'}
              >
                <FlexBox alignItems="center" gap="1.2rem">
                  <IconMenu02Off width="2rem" height="2rem" />
                  <span>광고관리</span>
                </FlexBox>
              </NavLink>
            </AdvertisingCenterNav>
          </section>
        </section>
        <LeverExtraSection flexDirection="column" gap="4rem">
          <BlueGuideBox
            justifyContent="center"
            alignItems="center"
            gap="0.8rem"
          >
            <IconGuide width="4rem" height="4rem" />
            <FlexBox flexDirection="column" gap="0.7rem">
              <GuideH3>레버 이용 가이드</GuideH3>
              <GrayFontParagraph>시작하기 전에 알아보기</GrayFontParagraph>
            </FlexBox>
          </BlueGuideBox>
          <FlexBox flexDirection="column" gap="1rem">
            <GrayFontParagraph>레버는 함께 만들어갑니다.</GrayFontParagraph>
            <PolicyLink to="#">이용약관</PolicyLink>
          </FlexBox>
        </LeverExtraSection>
      </SideNavigationSection>
    </SideNavigationLayout>
  );
};

export default SideNavigation;

const SideNavigationLayout = styled.aside`
  padding: 6rem 4rem;
  background-color: ${({ theme }) => theme.colors.WHITE};
`;

const SideNavigationHeader = styled.header`
  padding-bottom: 6rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.BORDER_GRAY};
`;

const SideNavigationSection = styled.section`
  ${FlexStyle}
  padding: 6rem 0;
  height: 100%;
`;

const LeverExtraSection = styled.section`
  ${FlexStyle}
`;

const AdvertisingCenterNav = styled.nav`
  ${FlexStyle}
`;

const LogoImageBox = styled.div`
  width: 12.4rem;
  height: 3rem;

  > img {
    width: 100%;
    height: 100%;
  }
`;

const BlueGuideBox = styled.div`
  ${FlexStyle}
  padding: 3rem 2rem;
  background-color: #e5f4fd;
  border-radius: 10px;
`;

const NavTitleH3 = styled.h3`
  padding-left: 1.6rem;
  padding-bottom: 1.3rem;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.GRAPH_GRAY};
`;

const GuideH3 = styled.h3`
  font-size: 1.6rem;
`;

const NavLink = styled(Link)`
  ${FlexStyle}
  padding: 2rem 2.2rem;
  font-size: 1.6rem;
  font-weight: 700;
  border-radius: 10px;

  &:hover {
    color: ${({ theme }) => theme.colors.PURPLE};
    background-color: ${({ theme }) => theme.colors.BORDER_GRAY};
  }

  &:hover .menu-ad-center,
  &:hover .menu-ad-management {
    fill: ${({ theme }) => theme.colors.PURPLE};
  }

  &:hover > div > span {
    color: ${({ theme }) => theme.colors.PURPLE};
  }

  &.active {
    .menu-ad-center,
    .menu-ad-management {
      fill: ${({ theme }) => theme.colors.PURPLE};
    }

    > div > span {
      color: ${({ theme }) => theme.colors.PURPLE};
    }
  }
`;

const PolicyLink = styled(Link)`
  ${GrayFontStyle}
  text-decoration: underline;
`;
