"use client";
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { DialogsProvider } from '@toolpad/core/useDialogs';
import { ReactNode } from 'react';

export default function DashboardPagesLayout(props: { children: ReactNode }) {
  return (
    <DashboardLayout>
      <DialogsProvider>
        {props.children}
      </DialogsProvider>
    </DashboardLayout>
  );
}