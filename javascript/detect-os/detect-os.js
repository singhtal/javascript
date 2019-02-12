function getMobileOperatingSystem() {
    var ua = navigator.userAgent || navigator.vendor || window.opera;
    var finalVal = {};
  
      if (/android/i.test(ua)) {
        ua = (ua || navigator.userAgent).toLowerCase(); 
        var match = ua.match(/android\s([0-9\.]*)/);
        finalVal.device = 'android';
        finalVal.version = match ? match[1] : undefined;
        return finalVal;
      }
  
      if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) {
        var match = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/),
        version;
  
        if (match !== undefined && match !== null) {
        version = [
            parseInt(match[1], 10),
            parseInt(match[2], 10),
            parseInt(match[3] || 0, 10)
        ];
        finalVal.device = 'ios';
        finalVal.version = parseFloat(version.join('.'));
        return finalVal;
        }

      }
  
      return "unknown";
  }