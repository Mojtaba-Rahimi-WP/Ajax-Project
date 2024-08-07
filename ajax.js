$.ajax({
    url: 'https://example.com/api/endpoint', // آدرس URL برای درخواست
    type: 'GET', // نوع درخواست (GET، POST، PUT، DELETE و غیره)
    dataType: 'json', // نوع داده‌های مورد انتظار از سرور
    data: { // داده‌هایی که باید ارسال شود
        key1: 'value1',
        key2: 'value2'
    },
    async: true, // درخواست به صورت همزمان (true) یا غیرهمزمان (false)
    cache: false, // آیا درخواست باید کش شود یا نه
    contentType: 'application/json', // نوع محتوای ارسال شده به سرور
    headers: { // هدرهای اضافی
        'Authorization': 'Bearer token',
        'Custom-Header': 'CustomValue'
    },
    timeout: 30000, // مدت زمان انتظار برای پاسخ (به میلی‌ثانیه)
    beforeSend: function(xhr, settings) {
        // عملیاتی که قبل از ارسال درخواست انجام می‌شود
        console.log('در حال ارسال درخواست...');
    },
    success: function(data, textStatus, xhr) {
        // عملیاتی که در صورت موفقیت آمیز بودن درخواست انجام می‌شود
        console.log('پاسخ دریافت شد:', data);
    },
    error: function(xhr, textStatus, errorThrown) {
        // عملیاتی که در صورت بروز خطا انجام می‌شود
        console.error('خطا در درخواست:', textStatus, errorThrown);
    },
    complete: function(xhr, textStatus) {
        // عملیاتی که پس از تکمیل درخواست انجام می‌شود (صرف نظر از موفقیت یا شکست)
        console.log('درخواست تکمیل شد:', textStatus);
    },
    statusCode: {
        404: function() {
            // عملیاتی که در صورت مواجهه با خطای 404 انجام می‌شود
            console.error('صفحه مورد نظر پیدا نشد.');
        },
        500: function() {
            // عملیاتی که در صورت مواجهه با خطای 500 انجام می‌شود
            console.error('خطای داخلی سرور.');
        }
    }
});
