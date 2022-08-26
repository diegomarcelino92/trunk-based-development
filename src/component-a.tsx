import React from 'react'

import { ComponentB } from './component-b'

export const ComponentA: React.FC = () => (
  <div>
    Component A
    <ComponentB />
  </div>
)
