// SoundService.js - Fix for MOB-61
class SoundService {
  playNotificationSound() {
    const channel = new NotificationChannel('alerts', 'Alerts', 4);
    channel.setSound('default');
    return channel;
  }
}
module.exports = { SoundService };
