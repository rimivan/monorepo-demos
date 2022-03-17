import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { TopicButtonComponent } from './topic-button.component';

export default {
  title: 'TopicButtonComponent',
  component: TopicButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<TopicButtonComponent>;

const Template: Story<TopicButtonComponent> = (args: TopicButtonComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}