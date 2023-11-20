import { Shoe } from "./shoe";
import { ShoeId } from "../value-objects/shoe-id";
import { UserId } from "C:/Users/farid/OneDrive/Documentos/GitHub/solesync-api-nest/src/users/domain/value-objects/users-id";
import { StateCode } from "../value-objects/state-code";
import { beforeEach } from "node:test";

describe('Shoe', ()=> {
    let shoe : Shoe;
    let shoeId : ShoeId;
    let stateCode : StateCode;
    let userId : UserId;

    beforeEach(() =>{
        shoeId = ShoeId.of(1);
        stateCode = StateCode.create(0);
        userId = UserId.of(1);
    });

    describe('connect',()=>{
        it('should connect', ()=>{
            const stateCode : StateCode = StateCode.create(0);

            stateCode.activate();
            
            expect(stateCode.getState()).toBe(1);
        })
    })

    
});
