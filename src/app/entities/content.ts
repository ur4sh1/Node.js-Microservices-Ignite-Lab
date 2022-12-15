export class Content {
  private readonly content: string;

  get value(): string {
    return this.content;
  }

  private validateContentLength(content: string): boolean {
    return content.length >= 5 && content.length <= 240;
  }

  constructor(content: string) {

    const isContentLengthvalid = this.validateContentLength(content);
    
    if(!isContentLengthvalid) {
      throw new Error('Content length error');
    }

    this.content = content;
  }

}