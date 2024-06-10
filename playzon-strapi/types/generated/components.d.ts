import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedBonusCodes extends Schema.Component {
  collectionName: 'components_shared_bonus_codes';
  info: {
    displayName: 'BonusCodes';
    icon: 'crown';
    description: '';
  };
  attributes: {
    type: Attribute.Enumeration<['Include', 'Exclude']>;
    code: Attribute.JSON & Attribute.CustomField<'plugin::tagsinput.tags'>;
  };
}

export interface SharedBtagCodes extends Schema.Component {
  collectionName: 'components_shared_btag_codes';
  info: {
    displayName: 'BtagCodes';
  };
  attributes: {
    type: Attribute.Enumeration<['Include', 'Exclude']>;
    btag: Attribute.JSON & Attribute.CustomField<'plugin::tagsinput.tags'>;
  };
}

export interface SharedCookieButton extends Schema.Component {
  collectionName: 'components_shared_cookie_buttons';
  info: {
    displayName: 'Cookie Button';
    icon: 'mouse-pointer';
  };
  attributes: {
    buttonType: Attribute.Enumeration<['Primary', 'Secondary', 'Text']>;
    label: Attribute.String;
  };
}

export interface SharedCta extends Schema.Component {
  collectionName: 'components_shared_ctas';
  info: {
    displayName: 'Cta';
    description: '';
  };
  attributes: {
    linkPublic: Attribute.String;
    labelPublic: Attribute.String;
    linkIdentified: Attribute.String;
    labelIdentified: Attribute.String;
    linkAuthenticated: Attribute.String;
    labelAuthenticated: Attribute.String;
  };
}

export interface SharedImageLinkList extends Schema.Component {
  collectionName: 'components_shared_image_link_lists';
  info: {
    displayName: 'Image Link list';
    description: '';
  };
  attributes: {
    iconLight: Attribute.Media;
    link: Attribute.String;
    target: Attribute.Enumeration<
      ['_internal', '_blank', '_self', '_parent', '_top']
    >;
    name: Attribute.String;
    iconDark: Attribute.Media;
    follow: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface SharedLobbySource extends Schema.Component {
  collectionName: 'components_shared_lobby_sources';
  info: {
    displayName: 'LobbySource';
    description: '';
  };
  attributes: {
    sourceSlug: Attribute.String;
    mobile: Attribute.Boolean;
    desktop: Attribute.Boolean;
    country: Attribute.Enumeration<['Fallback', 'AUS']>;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedPublishPeriods extends Schema.Component {
  collectionName: 'components_shared_publish_periods';
  info: {
    displayName: 'Date Range Selector';
    icon: 'repeat';
    description: '';
  };
  attributes: {
    dateFrom: Attribute.DateTime;
    dateTo: Attribute.DateTime;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

export interface SharedSliderDefault extends Schema.Component {
  collectionName: 'components_shared_slider_default';
  info: {
    displayName: 'Slide Default';
    description: '';
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'cta-slide'>;
    mobileImageDark: Attribute.Media;
    desktopImageDark: Attribute.Media;
    mobileImageLight: Attribute.Media;
    desktopImageLight: Attribute.Media;
    tagline: Attribute.String;
    headline: Attribute.String;
    cta: Attribute.Component<'shared.cta'>;
    sliderType: Attribute.String;
  };
}

export interface SharedUserRoles extends Schema.Component {
  collectionName: 'components_shared_user_roles';
  info: {
    displayName: 'UserRoles';
    icon: 'user';
    description: '';
  };
  attributes: {
    type: Attribute.Enumeration<['Include', 'Exclude']>;
    roleId: Attribute.JSON & Attribute.CustomField<'plugin::tagsinput.tags'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.bonus-codes': SharedBonusCodes;
      'shared.btag-codes': SharedBtagCodes;
      'shared.cookie-button': SharedCookieButton;
      'shared.cta': SharedCta;
      'shared.image-link-list': SharedImageLinkList;
      'shared.lobby-source': SharedLobbySource;
      'shared.meta-social': SharedMetaSocial;
      'shared.publish-periods': SharedPublishPeriods;
      'shared.seo': SharedSeo;
      'shared.slider-default': SharedSliderDefault;
      'shared.user-roles': SharedUserRoles;
    }
  }
}
