import Device from './interfaces/device.interface';

export default class TV implements Device {
  private enabled: boolean;
  private volume: number;

  constructor() {
    this.enabled = false;
    this.volume = 0;
  }

  isEnabled(): boolean {
    return this.enabled;
  }

  enable(): void {
    this.enabled = true;
  }

  disable(): void {
    this.enabled = false;
  }

  getVolume(): number {
    return this.volume;
  }

  setVolume(v: number): void {
    this.volume = v;
  }
}
