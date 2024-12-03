export class Swipe{
    ownerId:string;
    action:'like'|'dislike';
    // timestamp:severTimestamp()
    swiperPetId:string;
    targetPetId:string;
    id:string;
    timestamp:Date;
}