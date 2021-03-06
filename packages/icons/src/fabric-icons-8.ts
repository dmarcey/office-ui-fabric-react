  // Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fabric-assets-license

// tslint:disable:max-line-length

import {
  IIconOptions,
  IIconSubset,
  registerIcons
} from '@uifabric/styling/lib/index';

export function initializeIcons(
  baseUrl: string = '',
  options?: IIconOptions
): void {
  const subset: IIconSubset = {
    style: {
      MozOsxFontSmoothing: 'grayscale',
      WebkitFontSmoothing: 'antialiased',
      fontStyle: 'normal',
      fontWeight: 'normal',
      speak: 'none'
    },
    fontFace: {
      fontFamily: `"FabricMDL2Icons-8"`,
      src: `url('${baseUrl}fabric-icons-8-645fa64e.woff') format('woff')`
    },
    icons: {
      'StatusCircleInner': '\uF137',
      'StatusCircleRing': '\uF138',
      'StatusTriangleOuter': '\uF139',
      'StatusTriangleInner': '\uF13A',
      'StatusTriangleExclamation': '\uF13B',
      'StatusCircleExclamation': '\uF13C',
      'StatusCircleErrorX': '\uF13D',
      'StatusCircleInfo': '\uF13F',
      'StatusCircleBlock2': '\uF141',
      'StatusCircleQuestionMark': '\uF142',
      'Toll': '\uF160',
      'ExploreContentSingle': '\uF164',
      'CollapseContent': '\uF165',
      'CollapseContentSingle': '\uF166',
      'InfoSolid': '\uF167',
      'ProgressRingDots': '\uF16A',
      'CaloriesAdd': '\uF172',
      'BranchFork': '\uF173',
      'MobileReport': '\uF18A',
      'HardDriveGroup': '\uF18F',
      'FastMode': '\uF19A',
      'ToggleOn': '\uF19E',
      'ToggleOff': '\uF19F',
      'Trophy2': '\uF1AE',
      'BucketColor': '\uF1B6',
      'BucketColorFill': '\uF1B7',
      'Taskboard': '\uF1C2',
      'SingleColumn': '\uF1D3',
      'DoubleColumn': '\uF1D4',
      'TripleColumn': '\uF1D5',
      'ColumnLeftTwoThirds': '\uF1D6',
      'ColumnRightTwoThirds': '\uF1D7',
      'AccessLogoFill': '\uF1DB',
      'AnalyticsLogo': '\uF1DE',
      'AnalyticsQuery': '\uF1DF',
      'NewAnalyticsQuery': '\uF1E0',
      'AnalyticsReport': '\uF1E1',
      'WordLogo': '\uF1E3',
      'WordLogoFill': '\uF1E4',
      'ExcelLogo': '\uF1E5',
      'ExcelLogoFill': '\uF1E6',
      'OneNoteLogo': '\uF1E7',
      'OneNoteLogoFill': '\uF1E8',
      'OutlookLogo': '\uF1E9',
      'OutlookLogoFill': '\uF1EA',
      'PowerPointLogo': '\uF1EB',
      'PowerPointLogoFill': '\uF1EC',
      'PublisherLogo': '\uF1ED',
      'PublisherLogoFill': '\uF1EE',
      'ScheduleEventAction': '\uF1EF',
      'FlameSolid': '\uF1F3',
      'ServerProcesses': '\uF1FE',
      'Server': '\uF201',
      'SaveAll': '\uF203',
      'LinkedInLogo': '\uF20A',
      'Decimals': '\uF218',
      'SidePanelMirrored': '\uF221',
      'ProtectRestrict': '\uF22A',
      'UnknownMirrored': '\uF22E',
      'PublicContactCardMirrored': '\uF230',
      'GridViewSmall': '\uF232',
      'GridViewMedium': '\uF233',
      'GridViewLarge': '\uF234',
      'Step': '\uF241',
      'StepInsert': '\uF242',
      'StepShared': '\uF243',
      'StepSharedAdd': '\uF244',
      'StepSharedInsert': '\uF245',
      'ViewDashboard': '\uF246',
      'ViewList': '\uF247',
      'ViewListGroup': '\uF248',
      'ViewListTree': '\uF249',
      'TriggerAuto': '\uF24A',
      'TriggerUser': '\uF24B',
      'PivotChart': '\uF24C',
      'StackedBarChart': '\uF24D',
      'StackedLineChart': '\uF24E',
      'BuildQueue': '\uF24F',
      'BuildQueueNew': '\uF250',
      'UserFollowed': '\uF25C',
      'ContactLink': '\uF25F',
      'Stack': '\uF26F',
      'Bullseye': '\uF272',
      'VennDiagram': '\uF273',
      'FiveTileGrid': '\uF274',
      'FocalPoint': '\uF277',
      'RingerRemove': '\uF279',
      'TeamsLogoInverse': '\uF27A',
      'TeamsLogo': '\uF27B',
      'TeamsLogoFill': '\uF27C',
      'SkypeForBusinessLogoFill': '\uF27D',
      'SharepointLogo': '\uF27E',
      'SharepointLogoFill': '\uF27F',
      'DelveLogo': '\uF280',
      'DelveLogoFill': '\uF281',
      'OfficeVideoLogo': '\uF282',
      'OfficeVideoLogoFill': '\uF283',
      'ExchangeLogo': '\uF284',
      'ExchangeLogoFill': '\uF285',
      'DocumentApproval': '\uF28B'
    }
  };

  registerIcons(subset, options);
}
