import mongoose from "mongoose";

const inventorySchema = new mongoose.Schema({
    inventoryType: {
        type: String,
        required: [true, 'inventory type is required'],
        enum: ['in', 'out']
    },
    bloodGroup: {
        type: String,
        required: [true, 'blood group is required'],
        enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']
    },
    quantity: {
        type: Number,
        required: [true, 'blood quantity is required'],
    },
    organization: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // ✅ FIXED HERE
        required: [true, 'organization is required'],
    },
    hospital: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // ✅ FIXED HERE
        required: function () {
            return this.inventoryType === 'out';
        },
    },
    donor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // ✅ FIXED HERE
        required: function () {
            return this.inventoryType === 'in';
        }
    },
}, { timestamps: true });

export default mongoose.model("Inventory", inventorySchema);
