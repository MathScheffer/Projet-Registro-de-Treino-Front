export class Utils{
    static   formatarDia(dia: string): string{
        switch(dia){
          case "SEG":
            return "Segunda";
            break;
          case "TER":
            return "Terça";
            break;
          case "QUA":
            return "Quarta";
            break;
          case "QUI":
            return "Quinta";
            break;
          case "SEX":
            return "Sexta";
            break;
          default:
            return "";
        }
      }
}