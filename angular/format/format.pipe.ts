import { Pipe, PipeTransform } from "@angular/core";
import { formatBytes } from "../../common/bytes";
import { formatPrice } from "../../common/price";
import { formatToTimeAgo, formatTimer } from "../../common/time";
import { formatToJalali } from "../../common/moment";
import { fromatNumberToText } from "../../common/number-to-text";

@Pipe({
  name: "format",
})
export class FormatPipe implements PipeTransform {
  constructor() {}

  transform(value: any, type: string, ...args: any[]): string {
    switch (type) {
      case "bytes":
        return formatBytes(value);
      case "price":
        return formatPrice(value);
      case "ago":
        return formatToTimeAgo(value);
      case "time":
        return formatTimer(value);
      case "date":
        return formatToJalali(value, args[0] ?? "jYYYY/jMM/jDD");
      case "number":
        return fromatNumberToText(value);
      default:
        return "";
    }
  }
}
