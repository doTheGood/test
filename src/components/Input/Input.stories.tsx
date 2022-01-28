import React, { ReactElement } from 'react';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Search from '@material-ui/icons/Search';
import { Meta } from '@storybook/react';

import { Button } from '../Button';
import { Input, InputProps } from '../Input';
import {
  InputFeedback,
  InputFeedbackProps,
} from '../InputFeedback';
import { InputLabel, InputLabelProps } from '../InputLabel';

export default {
  title: 'Components/Input',
  parameters: {
    options: { showPanel: true },
  },
} as Meta;

const InputLabelExample = (props: Pick<InputLabelProps, 'required'>) => {
  return <InputLabel text="Label text goes there" {...props} />;
};

const InputExample = (
  props: Pick<
    InputProps,
    | 'autoFocus'
    | 'disabled'
    | 'error'
    | 'value'
    | 'explanatoryIcon'
    | 'actionButton'
  >,
) => {
  return <Input placeholder="Placeholder text" {...props} />;
};

const InputExamples = ({
  title,
  explanatoryIcon,
  actionButton,
}: { title: string } & Pick<
  InputProps,
  'explanatoryIcon' | 'actionButton'
>) => {
  return (
    <div>
      <h6 className="tag-mb-6">{title}</h6>
      <div
        className="tag-grid tag-gap-5 tag-grid-flow-rows tag-auto-cols-min"
        style={{ gridTemplateColumns: 'repeat(5, 200px)' }}
      >
        <span className="tag-text-body-normal-14">Empty</span>
        <span className="tag-text-body-normal-14">Filled</span>
        <span className="tag-text-body-normal-14">Error</span>
        <span className="tag-text-body-normal-14">Disabled</span>
        <span className="tag-text-body-normal-14">Empty with helper text</span>
        <div>
          <InputLabelExample />
          <InputExample
            explanatoryIcon={explanatoryIcon}
            actionButton={actionButton}
          />
        </div>
        <div>
          <InputLabelExample />
          <InputExample
            value="Text example"
            explanatoryIcon={explanatoryIcon}
            actionButton={actionButton}
          />
        </div>
        <div>
          <InputLabelExample />
          <InputExample
            error
            value="Text example"
            explanatoryIcon={explanatoryIcon}
            actionButton={actionButton}
          />
          <InputFeedback type="error" text="Error message" />
        </div>
        <div>
          <InputLabelExample />
          <InputExample
            disabled
            value="Text example"
            explanatoryIcon={explanatoryIcon}
            actionButton={actionButton}
          />
        </div>
        <div>
          <InputLabelExample required />
          <InputExample
            value="Text example"
            explanatoryIcon={explanatoryIcon}
            actionButton={actionButton}
          />
          <InputFeedback type="help" text="Helper text goes there" />
        </div>
      </div>
    </div>
  );
};

const InputMultilineExample = ({
  title,
  children,
  ...props
}: { title: string; children?: ReactElement<InputFeedbackProps> } & Pick<
  InputProps,
  'error' | 'disabled' | 'value'
>) => {
  return (
    <div className="tag-flex tag-flex-col">
      <div className="tag-text-body-normal-14">{title}</div>
      <InputLabelExample />
      <Input
        multiline
        rows={8}
        placeholder="Placeholder text"
        style={{ width: '300px' }}
        {...props}
      />
      {children}
    </div>
  );
};

const InputMultilineExamples = () => {
  return (
    <div>
      <h6 className="tag-mb-6">Mutiline</h6>
      <div className="tag-flex tag-gap-8">
        <InputMultilineExample title="Empty" />
        <InputMultilineExample title="Filled" value="Text example" />
      </div>
      <div className="tag-flex tag-gap-8 tag-mt-10">
        <InputMultilineExample title="Disabled" />
        <InputMultilineExample title="Error" value="Text example">
          <InputFeedback type="error" text="Error message" />
        </InputMultilineExample>
        <InputMultilineExample title="Empty with helper text">
          <InputFeedback type="help" text="Helper text goes there" />
        </InputMultilineExample>
      </div>
    </div>
  );
};

export const Overview = () => {
  return (
    <div className="tag-flex tag-flex-col tag-gap-10">
      <InputExamples title="Simple" />
      <InputExamples
        title="With action button"
        actionButton={
          <Button variant="ghost" size="small" icon={<ArrowDropDownIcon />} />
        }
      />
      <InputExamples
        title="With explanatory icon"
        explanatoryIcon={<Search />}
      />
      <InputMultilineExamples />
    </div>
  );
};
Overview.parameters = {
  options: { showPanel: false },
};
