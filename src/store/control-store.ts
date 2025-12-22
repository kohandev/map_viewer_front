import { makeAutoObservable, runInAction } from 'mobx';
import { ControlService } from '../api/services/control/service.ts';

export class ControlStore {
  accessToken: string | null = null;
  isLoading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  getTokenAction = async () => {
    runInAction(() => {
      this.isLoading = true;
    });
    try {
      const res = await ControlService.getToken();
      runInAction(() => {
        this.accessToken = res.data.accessToken;
      });
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  };

  startEngine = async () => await ControlService.startEngine();

  stopEngine = async () => {
    await ControlService.stopEngine();
    runInAction(() => {
      this.accessToken = null;
    });
  };
}

export default new ControlStore();
