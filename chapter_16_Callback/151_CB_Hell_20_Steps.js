// 151_CB_Hell_20_Steps.js
// 24-step E2E fully nested callback pyramid of doom example
// Each step logs its number in sequence, using setTimeout for async effect

function step1(cb) {
  setTimeout(() => {
    console.log('step 1');
    step2(cb);
  }, 50);
}
function step2(cb) {
  setTimeout(() => {
    console.log('step 2');
    step3(cb);
  }, 50);
}
function step3(cb) {
  setTimeout(() => {
    console.log('step 3');
    step4(cb);
  }, 50);
}
function step4(cb) {
  setTimeout(() => {
    console.log('step 4');
    step5(cb);
  }, 50);
}
function step5(cb) {
  setTimeout(() => {
    console.log('step 5');
    step6(cb);
  }, 50);
}
function step6(cb) {
  setTimeout(() => {
    console.log('step 6');
    step7(cb);
  }, 50);
}
function step7(cb) {
  setTimeout(() => {
    console.log('step 7');
    step8(cb);
  }, 50);
}
function step8(cb) {
  setTimeout(() => {
    console.log('step 8');
    step9(cb);
  }, 50);
}
function step9(cb) {
  setTimeout(() => {
    console.log('step 9');
    step10(cb);
  }, 50);
}
function step10(cb) {
  setTimeout(() => {
    console.log('step 10');
    step11(cb);
  }, 50);
}
function step11(cb) {
  setTimeout(() => {
    console.log('step 11');
    step12(cb);
  }, 50);
}
function step12(cb) {
  setTimeout(() => {
    console.log('step 12');
    step13(cb);
  }, 50);
}
function step13(cb) {
  setTimeout(() => {
    console.log('step 13');
    step14(cb);
  }, 50);
}
function step14(cb) {
  setTimeout(() => {
    console.log('step 14');
    step15(cb);
  }, 50);
}
function step15(cb) {
  setTimeout(() => {
    console.log('step 15');
    step16(cb);
  }, 50);
}
function step16(cb) {
  setTimeout(() => {
    console.log('step 16');
    step17(cb);
  }, 50);
}
function step17(cb) {
  setTimeout(() => {
    console.log('step 17');
    step18(cb);
  }, 50);
}
function step18(cb) {
  setTimeout(() => {
    console.log('step 18');
    step19(cb);
  }, 50);
}
function step19(cb) {
  setTimeout(() => {
    console.log('step 19');
    step20(cb);
  }, 50);
}
function step20(cb) {
  setTimeout(() => {
    console.log('step 20');
    step21(cb);
  }, 50);
}
function step21(cb) {
  setTimeout(() => {
    console.log('step 21');
    step22(cb);
  }, 50);
}
function step22(cb) {
  setTimeout(() => {
    console.log('step 22');
    step23(cb);
  }, 50);
}
function step23(cb) {
  setTimeout(() => {
    console.log('step 23');
    step24(cb);
  }, 50);
}
function step24(cb) {
  setTimeout(() => {
    console.log('step 24 (done!)');
    if (typeof cb === 'function') cb();
  }, 50);
}

// E2E journey - fully nested pyramid style
testJourney();

function testJourney() {
  step1(() => {
    // End of chain
    console.log('Journey complete!');
  });
}

// 151_CB_Hell_20_Steps.js
// QA E2E journey - fully nested callback pyramid of doom example
// Each step logs its action, using setTimeout for async effect

// - No central error handling (each level would need its own try/catch)
// - "Inversion of control" - you HAND your next step to each function and
//   trust it to call back exactly once.
// =====================================================================

function openBrowser(callback) {
    setTimeout(() => {
        console.log("Step 1: Browser opened");
        callback();
    }, 50);
}

function maximizeWindow(callback) {
    setTimeout(() => {
        console.log("Step 2: Window maximized");
        callback();
    }, 50);
}

function navigateToHome(callback) {
    setTimeout(() => {
        console.log("Step 3: Navigated to home page");
        callback();
    }, 50);
}

function acceptCookies(callback) {
    setTimeout(() => {
        console.log("Step 4: Cookies accepted");
        callback();
    }, 50);
}

function goToLoginPage(callback) {
    setTimeout(() => {
        console.log("Step 5: Login page loaded");
        callback();
    }, 50);
}

function enterUsername(callback) {
    setTimeout(() => {
        console.log("Step 6: Username entered");
        callback();
    }, 50);
}

function enterPassword(callback) {
    setTimeout(() => {
        console.log("Step 7: Password entered");
        callback();
    }, 50);
}

function clickLogin(callback) {
    setTimeout(() => {
        console.log("Step 8: Login button clicked");
        callback();
    }, 50);
}

function waitForDashboard(callback) {
    setTimeout(() => {
        console.log("Step 9: Dashboard loaded");
        callback();
    }, 50);
}

function searchProduct(callback) {
    setTimeout(() => {
        console.log("Step 10: Product searched");
        callback();
    }, 50);
}

function applyFilter(callback) {
    setTimeout(() => {
        console.log("Step 11: Filter applied");
        callback();
    }, 50);
}

function selectProduct(callback) {
    setTimeout(() => {
        console.log("Step 12: Product selected");
        callback();
    }, 50);
}

function viewProductDetails(callback) {
    setTimeout(() => {
        console.log("Step 13: Product details viewed");
        callback();
    }, 50);
}

function addToCart(callback) {
    setTimeout(() => {
        console.log("Step 14: Product added to cart");
        callback();
    }, 50);
}

function openCart(callback) {
    setTimeout(() => {
        console.log("Step 15: Cart opened");
        callback();
    }, 50);
}

function updateQuantity(callback) {
    setTimeout(() => {
        console.log("Step 16: Quantity updated");
        callback();
    }, 50);
}

function proceedToCheckout(callback) {
    setTimeout(() => {
        console.log("Step 17: Proceeded to checkout");
        callback();
    }, 50);
}

function enterShippingAddress(callback) {
    setTimeout(() => {
        console.log("Step 18: Shipping address entered");
        callback();
    }, 50);
}

function selectShippingMethod(callback) {
    setTimeout(() => {
        console.log("Step 19: Shipping method selected");
        callback();
    }, 50);
}

function placeOrder(callback) {
    setTimeout(() => {
        console.log("Step 20: Order placed - Test Complete!");
        callback();
    }, 50);
}

// =====================================================================
// THIS IS CALLBACK HELL 🔥
// 20-step E2E journey, fully nested pyramid of doom
// =====================================================================

openBrowser(function () {
    maximizeWindow(function () {
        navigateToHome(function () {
            acceptCookies(function () {
                goToLoginPage(function () {
                    enterUsername(function () {
                        enterPassword(function () {
                            clickLogin(function () {
                                waitForDashboard(function () {
                                    searchProduct(function () {
                                        applyFilter(function () {
                                            selectProduct(function () {
                                                viewProductDetails(function () {
                                                    addToCart(function () {
                                                        openCart(function () {
                                                            updateQuantity(function () {
                                                                proceedToCheckout(function () {
                                                                    enterShippingAddress(function () {
                                                                        selectShippingMethod(function () {
                                                                            placeOrder(function () {
                                                                                console.log("Journey complete!");
                                                                            });
                                                                        });
                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});