import { makeAutoObservable } from 'mobx';
import { ControlService } from '../api/services/control/service.ts';

export class ControlStore {
  accessToken: string | null = null;
  isLoading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  getTokenAction = async () => {
    this.isLoading = true;
    try {
      const res = await ControlService.getToken();
      this.accessToken = res.data.accessToken;
    } finally {
      this.isLoading = false;
    }
  };

  startEngine = async () => await ControlService.startEngine();

  stopEngine = async () => {
    await ControlService.stopEngine();
    this.accessToken = null;
  };
}

export default new ControlStore();
