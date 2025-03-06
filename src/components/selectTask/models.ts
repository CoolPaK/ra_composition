/* eslint-disable @typescript-eslint/ban-types */
export interface ITask {
    taskName: string, 
    solving: JSX.Element
}

export interface ITasks {
    tasks: ITask[]
    curTask: string
    setTask: Function
}
