export interface Command {
  command: string;
  outputs: string[];
  type: number; // 0 => command, 1 => result, 2 => just prompt
}
