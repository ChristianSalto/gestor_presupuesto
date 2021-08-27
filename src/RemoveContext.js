import React from 'react'

const RemoveContext = React.createContext()

export const RemoveProvider = RemoveContext.Provider
export const RemoveConsumer = RemoveContext.Consumer

export default RemoveContext