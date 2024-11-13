import type { Meta, StoryObj } from '@storybook/react';


import Aetna from '@/app/components/SVGs/HealthInsurance/Aetna';

const meta = {
    title: 'SVGs/HealthInsurance/Aetna',
    component: Aetna,
} satisfies Meta<typeof Aetna>

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {}