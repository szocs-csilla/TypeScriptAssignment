export class Connection {

   private static getConnection(): void{
        //return db.connect(process.env.DB_USER, process.env.DB_HOST, process.env.DB_PASSWORD, process.env.DB_PORT);
    }
   public static executeStatement(value: string){
       let connection =  this.getConnection();
       //connection.executeStatement(value);
    }
}
