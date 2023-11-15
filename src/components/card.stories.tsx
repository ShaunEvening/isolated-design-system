import { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";
import { Separator } from "./separator";
import { Button } from "./button";

const meta = {
  title: "Components/Card",
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof Card>;

export const Basic: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>I'm a card</CardTitle>
        <CardDescription>I'm here to display content</CardDescription>
      </CardHeader>
      <Separator className="mb-5" />
      <CardContent>
        <p>
          Duis elit eu culpa labore ad sint. Quis laborum sunt consequat ea
          minim sint amet do nulla et amet anim voluptate fugiat cupidatat. Eu
          eiusmod commodo eu aliqua. Qui enim qui id duis duis eiusmod ad
          aliquip nisi sint consequat eiusmod.
        </p>
      </CardContent>
    </Card>
  ),
};

export const Primary: Story = {
  render: () => (
    <Card className="bg-primary-background border-primary-background-accent text-primary-foreground">
      <CardHeader>
        <CardTitle>I'm a card</CardTitle>
        <CardDescription className="text-primary-foreground/80">
          I'm here to display content
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          Duis elit eu culpa labore ad sint. Quis laborum sunt consequat ea
          minim sint amet do nulla et amet anim voluptate fugiat cupidatat. Eu
          eiusmod commodo eu aliqua. Qui enim qui id duis duis eiusmod ad
          aliquip nisi sint consequat eiusmod.
        </p>
        <Button className="mt-6">Click me</Button>
      </CardContent>
    </Card>
  ),
};
