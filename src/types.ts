type TooltipProps = {
  content: string;
};

type TextFieldOption = {
  type: 'TextOption';
  name: string;
  tooltipProps?: TooltipProps;
  placeholder?: string;
  propsName: string;
  isArray?: boolean;
};

type NumberFieldOption = {
  type: 'NumberOption';
  name: string;
  propsName: string;
  placeholder?: string;
  stepSize?: number;
};

type SliderPropFieldOption = {
  type: 'SliderPropOption';
  name: string;
  propsName: string;
  min: number;
  max: number;
  stepSize: number;
  defaultValue: number;
  enabledValue?: number;
  inHeaderAction?: boolean;
  headerGroup?: string;
};

type BooleanPropFieldOption = {
  type: 'BooleanPropOption';
  name: string;
  propsName: string;
  options?: (string | boolean)[];
  defaultValue: boolean;
  enabledValue?: boolean;
  inHeaderAction?: boolean;
  headerGroup?: string;
};

type DateTimePickerFieldOption = {
  type: 'DateTimePickerOption';
  name: string;
  propsName: string;
};

type IconButtonOption = {
  type: 'IconButtonOption';
  name: string;
  propsName: string;
  options: string[];
  defaultValue: string | null;
  enabledValue?: string;
  inHeaderAction?: boolean;
  headerGroup?: string;
};

type DropdownPropOption = {
  type: 'DropdownPropOption';
  name: string;
  propsName: string;
  inline?: boolean;
  noneDisplayValue?: string;
  options: (string | boolean | null)[];
};

type TailtipOption = {
  name: 'tailtip';
  type: 'TailtipOption';
};

type FieldOption =
  | TextFieldOption
  | NumberFieldOption
  | BooleanPropFieldOption
  | DateTimePickerFieldOption
  | SliderPropFieldOption
  | IconButtonOption
  | DropdownPropOption
  | TailtipOption;

export type VersolyPluginConfig = {
  name: string;
  cdnUrls?: {
    url: string;
    delay?: boolean;
    defer?: boolean;
  }[];
  css?: string;
  js?: string;
  safelist?: string[];
  checks?: ({ plugin: string } | { html: string })[];
  options?: {
    name: string;
    previewInEditor?: boolean;
    isShown?: {
      props?: {
        [key: string]: boolean | string;
      };
    };
    fields: FieldOption[];
  };
  components?: {
    name: string;
    category: string;
    html: string;
  }[];
  displayNames?: {
    displayName: string;
    property: string;
    value: string;
  }[];
};
