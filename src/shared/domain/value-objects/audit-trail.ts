import { UserId } from "src/users/domain/value-objects/users-id";
import { DateTime } from "./date-time";
export class AuditTrail {
    private readonly createdAt: DateTime;
    private readonly createdBy: UserId;
    private readonly updatedAt: DateTime;
    private readonly updatedBy: UserId;
  
    private constructor(createdAt: DateTime, createdBy: UserId, updatedAt: DateTime, updatedBy: UserId) {
      this.createdAt = createdAt;
      this.createdBy = createdBy;
      this.updatedAt = updatedAt;
      this.updatedBy = updatedBy;
    }
  
    public static from(createdAt: DateTime, createdBy: UserId, updatedAt: DateTime, updatedBy: UserId) {
      return new AuditTrail(createdAt, createdBy, updatedAt, updatedBy);
    }
  
    public getCreatedAt(): DateTime {
      return this.createdAt;
    }
  
    public getCreatedBy(): UserId {
      return this.createdBy;
    }
  
    public getUpdatedAt(): DateTime {
      return this.updatedAt;
    }
  
    public getUpdatedBy(): UserId {
      return this.updatedBy;
    }
  }