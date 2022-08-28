class AndroidInfo {
    static deviceName() {
        return 'sdk_gphone64_arm64'; // pass the udid or devicename
    }

    static platFormVersion() {
        return '12'; // pass the platform version
    }

    static appName() {
        return 'Android-NativeDemoApp-0.4.0.apk'; // pass the apk name
    }
}

module.exports = AndroidInfo;
