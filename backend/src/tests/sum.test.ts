import assignorController from "../modules/assignor/controllers/assignor.controller";// Caminho correto para o controller
import assignorServices from "../modules/assignor/services/assignor.services"; // Caminho correto para os serviços
import { FastifyReply, FastifyRequest } from "fastify";

// Mock dos serviços
jest.mock("../services/assignor.services");

describe('Assignor Controller', () => {

  describe('assignorCreate', () => {
    it('deve retornar erro se os campos estiverem vazios', async () => {
      const mockRequest = {
        body: {}
      } as FastifyRequest;
      
      const mockReply = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn()
      } as unknown as FastifyReply;

      await assignorController.assignorCreate(mockRequest, mockReply);
      
      expect(mockReply.status).toHaveBeenCalledWith(400);
      expect(mockReply.send).toHaveBeenCalledWith({
        message: "Os campos nao podem ser nulos"
      });
    });

    it('deve retornar erro se o documento não for informado', async () => {
      const mockRequest = {
        body: { email: 'test@example.com', phone: '123456789', name: 'Test' }
      } as FastifyRequest;
      
      const mockReply = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn()
      } as unknown as FastifyReply;

      await assignorController.assignorCreate(mockRequest, mockReply);

      expect(mockReply.status).toHaveBeenCalledWith(400);
      expect(mockReply.send).toHaveBeenCalledWith({
        message: "Preencha um documento"
      });
    });

    it('deve criar um assignor com sucesso', async () => {
      const mockRequest = {
        body: { document: '123456789', email: 'test@example.com', phone: '123456789', name: 'Test' }
      } as FastifyRequest;
      
      const mockReply = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn()
      } as unknown as FastifyReply;

      // Simulando a resposta do serviço
      (assignorServices.assignorCreateService as jest.Mock).mockResolvedValue({ id: 1 });

      await assignorController.assignorCreate(mockRequest, mockReply);

      expect(mockReply.status).toHaveBeenCalledWith(200);
      expect(mockReply.send).toHaveBeenCalledWith({
        message: "Assignor created successfully",
        assignorID: 1
      });
    });
  });

  describe('assignorFind', () => {
    it('deve retornar erro se o id não for informado', async () => {
      const mockRequest = {
        params: {}
      } as FastifyRequest;
      
      const mockReply = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn()
      } as unknown as FastifyReply;

      await assignorController.assignorFind(mockRequest, mockReply);
      
      expect(mockReply.status).toHaveBeenCalledWith(400);
      expect(mockReply.send).toHaveBeenCalledWith({
        message: "not type id"
      });
    });

    it('deve retornar erro se o assignor não for encontrado', async () => {
      const mockRequest = {
        params: { id: '1' }
      } as FastifyRequest;

      const mockReply = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn()
      } as unknown as FastifyReply;

      // Simulando a resposta do serviço
      (assignorServices.assignorFindService as jest.Mock).mockResolvedValue(null);

      await assignorController.assignorFind(mockRequest, mockReply);

      expect(mockReply.status).toHaveBeenCalledWith(400);
      expect(mockReply.send).toHaveBeenCalledWith({
        message: "Id not found"
      });
    });

    it('deve retornar o assignor encontrado', async () => {
      const mockRequest = {
        params: { id: '1' }
      } as FastifyRequest;

      const mockReply = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn()
      } as unknown as FastifyReply;

      // Simulando a resposta do serviço
      (assignorServices.assignorFindService as jest.Mock).mockResolvedValue({ id: 1, name: 'Test' });

      await assignorController.assignorFind(mockRequest, mockReply);

      expect(mockReply.status).toHaveBeenCalledWith(200);
      expect(mockReply.send).toHaveBeenCalledWith({
        assignor: {
          result: { id: 1, name: 'Test' }
        }
      });
    });
  });

  describe('assignorUpdate', () => {
    it('deve retornar erro se os campos estiverem vazios', async () => {
      const mockRequest = {
        query: { id: '1' },
        body: {}
      } as FastifyRequest;
      
      const mockReply = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn()
      } as unknown as FastifyReply;

      await assignorController.assignorUpdate(mockRequest, mockReply);
      
      expect(mockReply.status).toHaveBeenCalledWith(400);
      expect(mockReply.send).toHaveBeenCalledWith({
        message: "Os campos nao podem ser nulos"
      });
    });

    it('deve atualizar um assignor com sucesso', async () => {
      const mockRequest = {
        query: { id: '1' },
        body: { document: '123456789', email: 'test@example.com', phone: '123456789', name: 'Updated Test' }
      } as FastifyRequest;
      
      const mockReply = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn()
      } as unknown as FastifyReply;

      // Simulando a resposta do serviço
      (assignorServices.assignorUpdateService as jest.Mock).mockResolvedValue({ id: 1, name: 'Updated Test' });

      await assignorController.assignorUpdate(mockRequest, mockReply);

      expect(mockReply.status).toHaveBeenCalledWith(200);
      expect(mockReply.send).toHaveBeenCalledWith({
        message: "Assignor altered successfull", 
        assignorFinded: { id: 1, name: 'Updated Test' }
      });
    });
  });

  describe('allAssignors', () => {
    it('deve retornar todos os assignors', async () => {
      const mockRequest = {} as FastifyRequest;
      const mockReply = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn()
      } as unknown as FastifyReply;

      // Simulando a resposta do serviço
      (assignorServices.allAssignorsService as jest.Mock).mockResolvedValue([{ id: 1, name: 'Test' }]);

      await assignorController.allAssignors(mockRequest, mockReply);

      expect(mockReply.status).toHaveBeenCalledWith(200);
      expect(mockReply.send).toHaveBeenCalledWith({
        assignors: {
          result: [{ id: 1, name: 'Test' }]
        }
      });
    });
  });

});