// NotificationService.js - Badge count fix for MOB-60
class NotificationService {
  constructor() {
    this.unreadCount = 0;
  }

  onNotificationReceived(notification) {
    this.unreadCount++;
    this.updateBadge();
    return notification;
  }

  onNotificationRead(notificationId) {
    if (this.unreadCount > 0) {
      this.unreadCount--;
    }
    this.updateBadge();
  }

  updateBadge() {
    if (typeof navigator !== 'undefined' && navigator.setAppBadge) {
      navigator.setAppBadge(this.unreadCount);
    }
  }

  getUnreadCount() {
    return this.unreadCount;
  }
}

module.exports = { NotificationService };
