export type Type = 'issues' | 'pull_request' | 'pull_request_review' | undefined;
export type MsgType = 'text' | 'markdown' | undefined;

export interface IParam {
  action: string;
  sender: ISender;
  repository: IRepository;
  issue?: IIssue;
}

export interface ISender {
  login: string;
}

export interface IRepository {
  name: string;
  html_url: string;
}

export interface IHeader {
  'X-GitHub-Event': Type;
  'X-GitHub-Delivery': string;
  'X-Hub-Signature': string;
}

export interface IMessageInfo {
  msgtype: MsgType;
  text: IMessageContent;
}

export interface IMessageContent {
  content: string;
  mentioned_list?: string[];
  mentioned_mobile_list?: string[]
}

export interface IIssue {
  url: string;
  user: IUser;
  assignee: IUser;
}

export interface IUser {
  login: string;
}
