
export class StateCode {
    private state: number;
    
    private constructor(
        state: number,
    ) {
        this.state = Number(state);
    }

    public static create(state: number): StateCode {
      return new StateCode(
        state,
      );
    }  

    public activate(): StateCode {
        this.newState(1);
        return this.newState(this.state = 1);
    }

    public deactivate(): StateCode {
        this.newState(0);
        return this.newState(this.state = 0);
    }

    private newState(state: number): StateCode {
        return new StateCode (state);
    }

    public getState(): number {
        return this.state;
    }
}