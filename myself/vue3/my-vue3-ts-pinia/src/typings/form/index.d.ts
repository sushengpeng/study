declare namespace Form {
    type itemType = 'password' | 'text' | 'radio' | 'checkbox'
    interface CheckboxItem {
        label: string,
        name: string
    }
    interface Option {
        labelWidth?: string | number,
        labelPosition?: 'left' | 'right' | 'top',
        disabled?: boolean,
        size?: 'large' | 'small' | 'default',
        submitButtonText?: string,
        resetButtonText?: string
    }
    interface FieldItem {
        label: string,
        field: string,
        type?: itemType,
        value?: any,
        placeholder?: string,
        disabled?: boolean,
        checkboxList?: CheckboxItem[],
        rules?: RuleItem[]
    }
    interface RuleItem {
        type?: RuleType;
        required?: boolean;
        pattern?: RegExp | string;
        min?: number;
        max?: number;
        len?: number;
        enum?: Array<string | number | boolean | null | undefined>;
        whitespace?: boolean;
        fields?: Record<string, Rule>;
        options?: ValidateOption;
        defaultField?: Rule;
        transform?: (value: Value) => Value;
        message?: string | ((a?: string) => string);
        asyncValidator?: (rule: InternalRuleItem, value: Value, callback: (error?: string | Error) => void, source: Values, options: ValidateOption) => void | Promise<void>;
        validator?: (rule: InternalRuleItem, value: Value, callback: (error?: string | Error) => void, source: Values, options: ValidateOption) => SyncValidateResult | void;
        trigger?:	'blur' | 'change'
    }
}

