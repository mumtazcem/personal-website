export default function handler(req: any, res: any) {
    const {
      query: { pid },
    } = req
  
    res.end(`Post: ${pid}`)
  }