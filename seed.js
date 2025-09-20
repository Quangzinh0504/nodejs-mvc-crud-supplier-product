require('dotenv').config();
const mongoose = require('mongoose');
const Supplier = require('./models/Supplier');
const Product = require('./models/Product');

async function seed() {
    await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    // Xóa dữ liệu cũ
    await Supplier.deleteMany({});
    await Product.deleteMany({});

    // Thêm nhà cung cấp mẫu
    const suppliers = await Supplier.insertMany([
        { name: 'FPT', address: 'Hà Nội', phone: '0909000001' },
        { name: 'VNPT', address: 'Hồ Chí Minh', phone: '0909000002' },
        { name: 'Viettel', address: 'Đà Nẵng', phone: '0909000003' },
    ]);

    // Thêm sản phẩm mẫu (liên kết supplierId)
    await Product.insertMany([
        { name: 'Modem Wifi', address: 'Kho A', phone: '0123456789', supplierId: suppliers[0]._id },
        { name: 'Router', address: 'Kho B', phone: '0234567891', supplierId: suppliers[1]._id },
        { name: 'Switch', address: 'Kho C', phone: '0345678912', supplierId: suppliers[2]._id },
    ]);

    console.log('Seed dữ liệu thành công!');
    mongoose.connection.close();
}

seed();