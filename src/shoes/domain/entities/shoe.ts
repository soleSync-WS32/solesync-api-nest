import { AggregateRoot } from "@nestjs/cqrs";
import { ShoeId } from "../value-objects/shoe-id";
import { UserId } from "src/users/domain/value-objects/users-id";
import { StateCode } from "src/shoes/domain/value-objects/state-code"
import { AuditTrail } from "src/shared/domain/value-objects/audit-trail";
import { ShoeCreated } from "../events/shoe-created";

export class Shoe extends AggregateRoot{
    private id: ShoeId;
    private state: StateCode;
    private readonly userId: UserId;
    private readonly auditTrail: AuditTrail;

    private constructor (state: StateCode, userId: UserId, auditTrail: AuditTrail){
        super();
        this.state = state;
        this.userId = userId;
        this.auditTrail = auditTrail;
    }

    public create(){
        const event = new ShoeCreated(this.id.getValue(), this.userId.getValue());
        this.apply(event);
    }

    public conect(state: StateCode): string[] {
        const errors: string[] = [];
        if (state.getState()==1) errors.push('The shoe has already been conected');
        this.state = this.state.activate();
        return errors;
    }

    public conexion(): boolean {
        return this.state.getState() == 1;

    }
}
