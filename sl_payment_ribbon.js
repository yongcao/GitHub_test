function Mscrm_Isv_sl_payment_Form_Group0_Control0_1(){
    if (crmForm.ObjectId == null) {
        alert('Payment must be created before a refund can occur.');
    }
    else if (crmForm.IsDirty) {
        alert('Save changes before refunding payment');
    }
    else if (crmForm.statuscode.SelectedText != 'Posted') {
        alert('Payment must be posted before creating a refund');
    }
    else if (crmForm.sl_reversalpaymentid.DataValue != null) {
        alert('Payment has been reversed.  Cannot perform refund.');
    }
    else if (crmForm.sl_refundedpaymentid.DataValue != null) {
        alert('Payment has already been refunded.');
    }
    else {
        if (crmForm.ObjectId != null) {
            window.showModalDialog(sl_.HostURL + ORG_UNIQUE_NAME + '/Adjustment/RefundPayment/' + crmForm.ObjectId, null, 'dialogHeight:300px; dialogWidth:500px', 'status=0');
            window.location.reload();

        }
    }
}

function Mscrm_Isv_sl_payment_Form_Group0_Control1_2(){
    if (crmForm.ObjectId == null) {
        alert('Payment must be created before a reversal can occur.');
    }
    else if (crmForm.IsDirty) {
        alert('Save changes before reversing payment');
    }
    else if (crmForm.statuscode.SelectedText != 'Posted') {
        alert('Payment must be posted before creating a reversal');
    }
    else if (crmForm.sl_reversalpaymentid.DataValue != null) {
        alert('Payment has already been reversed.');
    }
    else if (crmForm.sl_refundedpaymentid.DataValue != null) {
        alert('Payment has been refunded.  Cannot perform reversal.');
    }
    else {
        if (crmForm.ObjectId != null) {
            window.showModalDialog(sl_.HostURL + ORG_UNIQUE_NAME + '/Adjustment/ReversePayment/' + crmForm.ObjectId, null, 'dialogHeight:300px; dialogWidth:500px', 'status=0');
            window.location.reload();
        }
    } 
}
                    
function Mscrm_Isv_sl_payment_Form_Group0_Control2_3(){
    if (crmForm.ObjectId == null) {
        alert('Payment must be created before a reallocation can occur.');
    }
    else if (crmForm.IsDirty) {
        alert('Save changes before reallocating a payment');
    }
    else if (crmForm.statuscode.SelectedText != 'Posted') {
        alert('Payment must be posted before performing a reallocation');
    }
    else {    
        if (crmForm.ObjectId != null) {
            window.showModalDialog(sl_.HostURL + ORG_UNIQUE_NAME + '/Reallocation/Reallocate?id=' + crmForm.ObjectId, null, 'dialogHeight:600px; dialogWidth:1000px', 'status=0');
            document.getElementById('IFRAME_PaymentDesignations').contentWindow.location.reload();
        } 
    } 
}

function Mscrm_Isv_sl_payment_Form_Group1_Control0_4() {
    if (crmForm.ObjectId == null) {
        alert('Payment must be created before posting can occur.'); 
    }
    else if (crmForm.IsDirty || (document.frames.IFRAME_PaymentDesignations.document.all.isFormDirty != null && document.frames.IFRAME_PaymentDesignations.document.all.isFormDirty.value == "true")) {
        alert('Save changes before posting payment'); 
    }
    else if (crmForm.statuscode.SelectedText == 'Posted') {
        alert('Payment has already posted'); 
    }
    else {
        if (crmForm.ObjectId != null) {
            $.post(sl_.HostURL + ORG_UNIQUE_NAME + '/Payment/PostPayment', {
                id: crmForm.ObjectId
            }, function (data) {
                //alert(data.indexOf('Success'));
                if (data.Message != null && data.Message == "Success") {
                    location.reload();
                }
                else {
                    if (data.Message != null)
                        alert('Failed to Post. ' + data.Message); 
                }
            }, 'json')
        }
    }
}

function Mscrm_Isv_sl_payment_HomepageGrid_Group0_Control0_Group0_Control0_5() {
    function getAdvFindFetchXml() {
        if (document.getElementById('FetchXml')) {
            return document.getElementById('FetchXml').value;
        }
        else {
            return '';
        }
    } 
    var sUrl = '/_controls/lookup/lookupsingle.aspx?class=MemberTypeList&objecttypes=4300&browse=0&membertypecode=1&ShowNewButton=1';   
    returnValue = window.showModalDialog(sUrl, null, 'status=0');
    if (returnValue != null) {
        window.showModalDialog(sl_.HostURL + ORG_UNIQUE_NAME + '/MarketingList/AddToMarketingList?marketingListId=' + returnValue.items[0].id + '&objectTypeCode=1', window.self, 'dialogHeight:200px;dialogWidth:400px;resizable:no;');
    } 
}

function Mscrm_Isv_sl_payment_HomepageGrid_Group0_Control0_Group1_Control0_6() {
    function getAdvFindFetchXml() {
        if (document.getElementById('FetchXml')) {
            return document.getElementById('FetchXml').value;
        }
        else {
            return '';
        }
    } 
    var sUrl = '/_controls/lookup/lookupsingle.aspx?class=MemberTypeList&objecttypes=4300&browse=0&membertypecode=2&ShowNewButton=1'; 
    returnValue = window.showModalDialog(sUrl, null, 'status=0');
    if (returnValue != null) {
        window.showModalDialog(sl_.HostURL + ORG_UNIQUE_NAME + '/MarketingList/AddToMarketingList?marketingListId=' + returnValue.items[0].id + '&objectTypeCode=2', window.self, 'dialogHeight:200px;dialogWidth:400px;resizable:no;');
    } 
}

function Mscrm_Isv_sl_payment_SubGrid_Group0_Control0_Group0_Control0_7() {
    function getAdvFindFetchXml() {
        if (document.getElementById('FetchXml')) {
            return document.getElementById('FetchXml').value;
        }
        else {
            return '';
        }
    } 
    var sUrl = '/_controls/lookup/lookupsingle.aspx?class=MemberTypeList&objecttypes=4300&browse=0&membertypecode=1&ShowNewButton=1'; 
    returnValue = window.showModalDialog(sUrl, null, 'status=0');
    if (returnValue != null) {
        window.showModalDialog(sl_.HostURL + ORG_UNIQUE_NAME + '/MarketingList/AddToMarketingList?marketingListId=' + returnValue.items[0].id + '&objectTypeCode=1', window.self, 'dialogHeight:200px;dialogWidth:400px;resizable:no;');
    } 
 }

 function Mscrm_Isv_sl_payment_SubGrid_Group0_Control0_Group1_Control0_8() {
     function getAdvFindFetchXml() {
         if (document.getElementById('FetchXml')) {
             return document.getElementById('FetchXml').value;
         }
         else {
             return '';
         }
     }
     var sUrl = '/_controls/lookup/lookupsingle.aspx?class=MemberTypeList&objecttypes=4300&browse=0&membertypecode=2&ShowNewButton=1';
     returnValue = window.showModalDialog(sUrl, null, 'status=0');
     if (returnValue != null) {
         window.showModalDialog(sl_.HostURL + ORG_UNIQUE_NAME + '/MarketingList/AddToMarketingList?marketingListId=' + returnValue.items[0].id + '&objectTypeCode=2', window.self, 'dialogHeight:200px;dialogWidth:400px;resizable:no;');
     }
 }

 function EnableAdjustmentsFlyerButton() {
     if ((crmForm.all.statuscode.DataValue == "3") &&
         ((crmForm.all.sl_adjustmenttype.DataValue == "3") || (crmForm.all.sl_adjustmenttype.DataValue == null)) &&
         (crmForm.all.sl_amount.DataValue > 0)) {
         return true;
     }
     else {
         return false;
     }

 }

//  || ((crmForm.all.sl_adjustmenttype.DataValue == "1") || (crmForm.all.sl_adjustmenttype.DataValue == "2")) &&
//         (crmForm.all.sl_amount.DataValue <= 0) && 