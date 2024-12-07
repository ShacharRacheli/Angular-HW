import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'icon',
  standalone: true
})
export class IconPipe implements PipeTransform {

  transform(value: string): any {
    const listIcon=[
      { name: "happy", icon: "😊😊😊😊😊" },
      { name: "sad", icon: "😒😒😢😢😢" },
      { name: "excited", icon: "😃😃😄😄😄" },
      { name: "thinking", icon: "🤔🤔🤔🤔🤔" },
      { name: "angry", icon: "😡😡😠😠😠" },
      { name: "love", icon: "❤️❤️❤️❤️❤️" },
      { name: "surprised", icon: "😲😲😮😮😮" },
      { name: "confused", icon: "😕😕😵😵😵" },
      { name: "bored", icon: "😐😐😑😑😑" },
      { name: "fearful", icon: "😨😨😱😱😱" }
    ]
    const findIcon= listIcon.find(x=>x.name==value)
    return findIcon?findIcon.icon:"❗❔"
  }

}
