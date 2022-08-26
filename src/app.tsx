import React from 'react'
import { ComponentA } from './component-a'

const FeatureFlagProvider = {
  issue: false
}

export const App: React.FC = () => (
  <div>
    <h1>Trunk Based Development</h1>
    {FeatureFlagProvider.issue && <ComponentA />}
  </div>
)
