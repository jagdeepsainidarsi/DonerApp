"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var registrationSchema = new mongoose_1.default.Schema({
    first_name: { type: String,
        required: true
    },
    last_name: { type: String,
    },
    age: { type: Number,
        required: true
    },
    gender: { type: String,
        required: true
    },
    bloodgroup: { type: String,
        required: true },
    phoneno: { type: String,
        required: true
    },
    address: { type: String,
    },
    distt: { type: String,
        required: true
    },
    state: { type: String,
        required: true
    },
    coronapositive: { type: String,
        required: true
    },
    coronanegative: { type: String,
        required: true
    },
    status: { type: Boolean,
        required: true },
    createdBy: { type: String },
    ModifiedBy: { type: String }
});
// const Registration_model=mongoose.model("REGISTRATIONSCHEMA",registrationSchema);
// module.exports=Registration_model;
// export default mongoose.model<JD>("REGISTRATIONSCHEMA",registrationSchema)
var Registration_model = mongoose_1.default.model("REGISTRATIONSCHEMA", registrationSchema);
module.exports = Registration_model;
