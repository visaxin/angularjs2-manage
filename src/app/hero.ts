export class Repository {
  private _appID: string;
  private _repoName: string;
  private _region: string;
  private _retention: string;
  private _capacity: number;
  private _schema: SchemaObject[];
  private _createTime: string;
  private _updateTime: string;
  private _producerInfo: ProducerInfo[];
  private _status: number;
  private _indexVersion: string;
  private _tempalteVersion: string;
  private _replica: number;
  private _primaryField: string;


  get appID(): string {
    return this._appID;
  }

  set appID(value: string) {
    this._appID = value;
  }

  get repoName(): string {
    return this._repoName;
  }

  set repoName(value: string) {
    this._repoName = value;
  }

  get region(): string {
    return this._region;
  }

  set region(value: string) {
    this._region = value;
  }

  get retention(): string {
    return this._retention;
  }

  set retention(value: string) {
    this._retention = value;
  }

  get capacity(): number {
    return this._capacity;
  }

  set capacity(value: number) {
    this._capacity = value;
  }

  get schema(): SchemaObject[] {
    return this._schema;
  }

  set schema(value: SchemaObject[]) {
    this._schema = value;
  }

  get createTime(): string {
    return this._createTime;
  }

  set createTime(value: string) {
    this._createTime = value;
  }

  get updateTime(): string {
    return this._updateTime;
  }

  set updateTime(value: string) {
    this._updateTime = value;
  }

  get producerInfo(): ProducerInfo[] {
    return this._producerInfo;
  }

  set producerInfo(value: ProducerInfo[]) {
    this._producerInfo = value;
  }

  get status(): number {
    return this._status;
  }

  set status(value: number) {
    this._status = value;
  }

  get indexVersion(): string {
    return this._indexVersion;
  }

  set indexVersion(value: string) {
    this._indexVersion = value;
  }

  get tempalteVersion(): string {
    return this._tempalteVersion;
  }

  set tempalteVersion(value: string) {
    this._tempalteVersion = value;
  }

  get replica(): number {
    return this._replica;
  }

  set replica(value: number) {
    this._replica = value;
  }

  get primaryField(): string {
    return this._primaryField;
  }

  set primaryField(value: string) {
    this._primaryField = value;
  }
}

export class SchemaObject {
  private _key: string;
  private _valtype: string;
  private _analyzer: string;
  private _primary: boolean;
  private _options: object;


  get key(): string {
    return this._key;
  }

  set key(value: string) {
    this._key = value;
  }

  get valtype(): string {
    return this._valtype;
  }

  set valtype(value: string) {
    this._valtype = value;
  }

  get analyzer(): string {
    return this._analyzer;
  }

  set analyzer(value: string) {
    this._analyzer = value;
  }

  get primary(): boolean {
    return this._primary;
  }

  set primary(value: boolean) {
    this._primary = value;
  }

  get options(): Object {
    return this._options;
  }

  set options(value: Object) {
    this._options = value;
  }
}
export class ProducerInfo {
  private _status: number;
  private _custom: number;
  private _batchSize: number;
  private _taskSize: number;
  private _concurrency: number;
  private _capacity: number;
  private _transactionCapacity: number;
  private _hosts: string[];
  private _updateTime: string;


  get status(): number {
    return this._status;
  }

  set status(value: number) {
    this._status = value;
  }

  get custom(): number {
    return this._custom;
  }

  set custom(value: number) {
    this._custom = value;
  }

  get batchSize(): number {
    return this._batchSize;
  }

  set batchSize(value: number) {
    this._batchSize = value;
  }

  get taskSize(): number {
    return this._taskSize;
  }

  set taskSize(value: number) {
    this._taskSize = value;
  }

  get concurrency(): number {
    return this._concurrency;
  }

  set concurrency(value: number) {
    this._concurrency = value;
  }

  get capacity(): number {
    return this._capacity;
  }

  set capacity(value: number) {
    this._capacity = value;
  }

  get transactionCapacity(): number {
    return this._transactionCapacity;
  }

  set transactionCapacity(value: number) {
    this._transactionCapacity = value;
  }

  get hosts(): string[] {
    return this._hosts;
  }

  set hosts(value: string[]) {
    this._hosts = value;
  }

  get updateTime(): string {
    return this._updateTime;
  }

  set updateTime(value: string) {
    this._updateTime = value;
  }
}

