const payableController = require("../modules/payable/controllers/payable.controller") 

jest.mock("")

describe('payable controller', () => {
  test('should create payable successfully', async () => {
    const request = {
        body: {
            value: '120',
            simpledate: "2024-11-14",
            assignorId: "215593f4-400a-480a-b903-752e1c110b87"
        }
    }


    const reply = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn()
    }

  await payableController.payableCreate(request, reply)
  });
});