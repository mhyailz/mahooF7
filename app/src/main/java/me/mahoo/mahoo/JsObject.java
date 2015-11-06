package me.mahoo.mahoo;

import android.app.Activity;
import android.webkit.JavascriptInterface;
import android.widget.Toast;

/**
 * Created by mahoo on 2015/6/19.
 */
public class JsObject {

    private Activity activity;

    private long exitTime = 0;

    public JsObject(Activity activity) {
        this.activity = activity;
    }

    @JavascriptInterface
    public void appGoBack() {
        if ((System.currentTimeMillis() - exitTime) > 2000) {
            Toast.makeText(activity.getApplicationContext(), "再按一次退出程序", Toast.LENGTH_SHORT).show();
            exitTime = System.currentTimeMillis();
        } else {
            activity.finish();
            System.exit(0);
        }
    }
}
