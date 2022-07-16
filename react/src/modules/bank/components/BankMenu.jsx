import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {addBankPage, setBankPage} from "../actions/action.bankPages";
import BankPush from "./BankPush";
import BankPop from "./BankPop";
import BankTransfer from "./BankTransfer";
import BankTaxes from "./BankTaxes";
import BankPhone from "./BankPhone";
import BankCashBox from "./BankCashBox";
import styles from '../styles/Bank.module.scss';

class BankMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { addPage } = this.props;

        return (
            <div className={styles.page}>
                <h1 className={styles.title}>Услуги</h1>
                <div className={styles.menu}>
                    <div className={styles.menuButton} onClick={() => addPage(<BankPush />)}>
                        <div className={styles.buttonIconWrapper}>
                            <div className={styles.buttonIcon}>
                                <svg width="46" height="46" viewBox="0 0 46 46" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M44.2173 12.0614C43.8374 11.6815 43.2237 11.6815 42.8438 12.0614C42.4638 12.4414 42.4638 13.0551 42.8438 13.435C44.4219 15.0521 44.4024 17.6434 42.7853 19.2215C41.1974 20.7802 38.6451 20.7802 37.0573 19.2215C37.0378 19.202 37.028 19.1923 37.0085 19.1825L38.7036 22.2511C39.1127 22.3388 39.5316 22.3778 39.9602 22.3778C43.2919 22.3778 46 19.6794 46 16.338C45.9903 14.7404 45.3571 13.2012 44.2173 12.0614Z"
                                          />
                                    <path d="M21.9967 1.71584C17.3597 1.72558 13.6092 5.47609 13.5995 10.1131C13.5995 10.2982 13.5995 10.4833 13.619 10.7073C13.8041 13.3278 15.2166 15.7145 17.4279 17.1465C17.4766 17.1757 17.5253 17.2439 17.5643 17.2439H26.4681C26.5266 17.2439 26.6045 17.1173 26.6824 17.0588C29.0107 15.5002 30.4037 12.8797 30.394 10.0839C30.3842 5.45661 26.624 1.7061 21.9967 1.71584ZM21.9967 8.86617C23.3703 8.86617 24.588 9.75265 25.0166 11.0775C25.5524 12.7531 24.6367 14.5455 22.9709 15.0813V15.393C22.9709 15.9288 22.5325 16.3672 21.9967 16.3672C21.4609 16.3672 21.0226 15.9288 21.0226 15.393V15.0813C19.7172 14.6527 18.821 13.4252 18.821 12.0517C18.821 12.0322 18.821 12.0224 18.821 12.003C18.8307 11.4574 19.2691 11.0385 19.8146 11.0483C20.3601 11.058 20.779 11.5061 20.7693 12.0419C20.7693 12.7141 21.3148 13.2694 21.9967 13.2694C22.6689 13.2596 23.2047 12.7238 23.2144 12.0517C23.2242 11.3795 22.6786 10.8242 21.9967 10.8145C20.6232 10.8145 19.3957 9.928 18.9768 8.61289C18.4411 6.94707 19.3568 5.15462 21.0226 4.61883V4.1902C21.0226 3.65442 21.4609 3.21604 21.9967 3.21604C22.5325 3.21604 22.9709 3.65442 22.9709 4.1902V4.61883C24.2763 5.04746 25.1627 6.26516 25.1725 7.63873C25.1725 8.17452 24.7341 8.61289 24.1983 8.61289C23.6625 8.61289 23.2242 8.17452 23.2242 7.63873C23.2242 6.95682 22.6786 6.41129 21.9967 6.41129C21.3148 6.41129 20.7693 6.96656 20.7693 7.63873C20.7693 8.32064 21.3246 8.86617 21.9967 8.86617Z"
                                          />
                                    <path d="M37.8755 27.4921V26.82C37.7781 25.4561 37.3689 23.9657 36.6578 22.4947L35.9759 21.1601C34.69 19.0559 32.8391 17.2245 30.5888 15.8607C30.2673 16.3672 29.8874 16.8348 29.4588 17.2537H30.4719C31.0077 17.2537 31.4461 17.6921 31.4461 18.2279C31.4461 18.7637 31.0077 19.202 30.4719 19.202H13.5897C13.0539 19.202 12.6156 18.7637 12.6156 18.2279C12.6156 17.6921 13.0539 17.2537 13.5897 17.2537H14.5152C13.0052 15.6756 12.0311 13.6688 11.7388 11.5062C10.3458 11.0483 9.59567 10.9801 9.206 10.9899C9.19626 10.9899 9.17678 10.9899 9.16704 10.9899C9.14755 11.36 9.29368 12.7141 9.38135 13.4642L9.63463 15.8022C9.64437 15.8412 9.64437 15.8704 9.64437 15.9094C9.65412 16.2211 9.53722 16.5231 9.31316 16.7471C9.28394 16.7764 9.25471 16.7959 9.22549 16.8251C7.30639 18.3155 5.82567 20.0788 4.85151 22.0758C4.8028 22.1732 4.74435 22.2511 4.66642 22.3291C4.48133 22.5337 4.23779 22.6603 3.97477 22.709L0.828233 23.3422C0.341154 23.4396 -0.00954357 23.878 0.000198021 24.3748V30.6776C-0.00954357 31.1744 0.341154 31.6128 0.828233 31.7102L3.96503 32.3434C4.22805 32.3921 4.47159 32.5285 4.65668 32.7234C4.73461 32.8013 4.79306 32.889 4.84177 32.9864C5.43601 34.2138 6.20559 35.3536 7.1213 36.357C7.2382 36.4836 7.31613 36.6395 7.3551 36.8148C7.43303 37.0973 7.39407 37.3993 7.24794 37.6429C6.32249 39.523 6.80957 41.7928 8.43642 43.1176C9.44954 43.9262 10.7354 44.3451 12.0311 44.2769C13.3559 44.2184 14.6126 43.7021 15.5867 42.7962L16.5414 41.8902C16.7655 41.6759 17.0577 41.559 17.3695 41.5687C17.4279 41.5687 17.4766 41.5687 17.5351 41.5785C20.0679 42.0071 22.6689 41.9292 25.1725 41.3349C25.2504 41.3154 25.3186 41.3057 25.3965 41.3057C25.6985 41.296 26.0005 41.4129 26.2246 41.6272L27.491 42.8351C28.4651 43.7411 29.751 44.2477 31.0856 44.2282H31.2707C32.6832 44.2282 33.9886 43.6145 34.953 42.6111C36.4727 41.0037 36.5507 38.5099 35.1381 36.6687C35.0992 36.62 35.0699 36.5713 35.0407 36.5128C34.729 35.9089 34.9823 35.4607 35.1479 35.2659C36.9403 32.9572 37.8755 30.2685 37.8755 27.4921ZM11.5245 27.5895C10.1509 27.5895 9.03065 26.479 9.03065 25.0957C9.03065 23.7221 10.1412 22.6018 11.5245 22.6018C12.9078 22.6018 14.0183 23.7221 14.0183 25.0957C14.0183 26.4693 12.8981 27.5895 11.5245 27.5895Z"
                                          />
                                    <defs>
                                        <linearGradient id="push_gradient" x1="37.8309" y1="12.4229" x2="45.9354" y2="20.4054"
                                                        gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#FF3636"/>
                                            <stop offset="1" stop-color="#FF9153"/>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <p>Пополнить счет</p>
                    </div>
                    <div className={styles.menuButton} onClick={() => addPage(<BankPop />)}>
                        <div className={styles.buttonIconWrapper}>
                            <div className={styles.buttonIcon}>
                                <svg width="46" height="46" viewBox="0 0 46 46" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M45.8336 29.7802C45.5141 29.3062 44.8856 29.1826 44.4116 29.502L37.755 34.5408H25.5753V30.3161H38.0641C38.2805 30.3161 38.4969 30.2336 38.6618 30.11L45.5657 24.3808C46.0294 24.051 46.1324 23.4019 45.7924 22.9485C45.4626 22.4848 44.8135 22.3818 44.3601 22.7218L37.7344 28.2552H25.5753V23.9274H38.0641C38.2908 23.9377 38.5175 23.8656 38.703 23.7316L45.6069 17.4769C46.05 17.1162 46.1221 16.4671 45.7615 16.024C45.4111 15.5809 44.7722 15.5088 44.3292 15.8488L37.7035 21.8665H25.5753V16.3537C25.5753 16.0549 25.6887 15.7767 25.905 15.5706L32.5307 9.39832H19.7843L18.929 10.2227L11.8706 16.8071V21.8665H1.03043C0.463694 21.8665 0 22.3302 0 22.897C0 23.4637 0.463694 23.9274 1.03043 23.9274H11.8706V28.2552H1.03043C0.463694 28.2552 0 28.7189 0 29.2856C0 29.8524 0.463694 30.3161 1.03043 30.3161H11.8706V34.5408H1.03043C0.463694 34.5408 0 35.0045 0 35.5713C0 36.138 0.463694 36.6017 1.03043 36.6017H38.0641C38.2702 36.5914 38.466 36.5296 38.6309 36.4059L45.5348 31.2125C46.0088 30.9034 46.1427 30.2541 45.8336 29.7802Z"/>
                                    <path d="M34.6122 10.3257C34.5916 10.3257 34.5813 10.3669 34.571 10.3669L28.8933 15.6839H37.6623L43.3709 10.3257H34.6122Z"/>
                                    <path d="M8.33615 10.3257L2.62756 15.6839H10.0982C10.1188 15.5809 10.1291 15.6118 10.1497 15.6015L15.7759 10.3257H8.33615Z"/>
                                    <defs>
                                        <linearGradient id="pop_gradient" x1="6.73171" y1="12.3841" x2="23.6428" y2="44.0272" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#FFC700"/>
                                            <stop offset="1" stop-color="#FF9900"/>
                                        </linearGradient>
                                    </defs>
                                </svg>

                            </div>
                        </div>
                        <p>Снять со счета</p>
                    </div>
                    <div className={styles.menuButton} onClick={() => addPage(<BankTaxes />)}>
                        <div className={styles.buttonIconWrapper}>
                            <div className={styles.buttonIcon}>
                                <svg width="46" height="46" viewBox="0 0 46 46" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M45.439 16.9373C45.3044 16.7803 45.1585 16.6344 44.9902 16.5222L24.3463 2.19489C23.5385 1.6227 22.4614 1.6227 21.6536 2.19489L1.03215 16.5222C0.863862 16.6344 0.718008 16.769 0.583374 16.9261L8.52679 26.2271V12.9656C8.51557 12.3373 9.00923 11.8212 9.6263 11.81H36.3736C36.9907 11.8325 37.4844 12.3486 37.4731 12.9656V26.5412L45.439 16.9373Z"/>
                                    <path d="M35.2293 29.234V14.054H10.7708V28.8525L15.5054 34.3949L20.7449 31.4442C22.1473 30.6588 23.8527 30.6588 25.2551 31.4442L30.8312 34.5857L35.2405 29.2564C35.2405 29.2451 35.2293 29.2451 35.2293 29.234ZM24.122 28.7402V29.4246C24.122 30.0416 23.6171 30.5465 23 30.5465C22.3829 30.5465 21.8781 30.0416 21.8781 29.4246V28.7402C20.3859 28.2577 19.3649 26.8665 19.3649 25.2846C19.3649 24.6675 19.8698 24.1626 20.4869 24.1626C21.1039 24.1626 21.6088 24.6675 21.6088 25.2846C21.6088 26.0475 22.2371 26.6758 23.0112 26.6758C23.7742 26.6758 24.4025 26.0475 24.4025 25.2734C24.4025 24.5104 23.7742 23.8821 23 23.8821C21.4181 23.8821 20.0156 22.8724 19.5332 21.369C18.9273 19.4504 19.9708 17.3973 21.8781 16.7802V16.0621C21.8781 15.4451 22.3829 14.9402 23 14.9402C23.6171 14.9402 24.122 15.4451 24.122 16.0621V16.7802C25.6142 17.2626 26.6351 18.6538 26.6351 20.2358C26.6351 20.8529 26.1303 21.3577 25.5132 21.3577C24.8961 21.3577 24.3912 20.8529 24.3912 20.2358C24.3912 19.4729 23.7742 18.8446 23 18.8446C22.2371 18.8446 21.62 19.4616 21.62 20.2358C21.6088 20.9987 22.2259 21.627 23 21.6382C24.5708 21.6382 25.9732 22.648 26.4556 24.1514C27.0951 26.0588 26.0517 28.1231 24.122 28.7402Z"/>
                                    <path d="M8.77365 29.9742L0 19.7084V41.923C0 42.2932 0.0785366 42.6523 0.246829 42.9776L13.4971 35.5054L8.77365 29.9742Z"/>
                                    <path d="M30.7078 37.0426L24.178 33.385C23.46 32.9811 22.5737 32.9811 21.8556 33.3738L2.50195 44.2343H43.5205L30.7078 37.0426Z"/>
                                    <path d="M32.8282 35.7076L45.7531 42.9778C45.9102 42.6525 46 42.2934 46 41.9232V19.7759L32.8282 35.7076Z"/>
                                    <defs>
                                        <linearGradient id="taxes_gradient" x1="9.33569" y1="1.76575" x2="19.073" y2="31.8824" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#00CE3A"/>
                                            <stop offset="1" stop-color="#00C19F"/>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <p>Оплата налогов</p>
                    </div>
                    <div className={styles.menuButton} onClick={() => addPage(<BankCashBox />)}>
                        <div className={styles.buttonIconWrapper}>
                            <div className={styles.buttonIcon}>
                                <svg width="46" height="46" viewBox="0 0 46 46" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0)">
                                        <path d="M28.5523 17.4293H17.3985C16.3722 17.4293 15.5437 18.2578 15.5437 19.2842C15.5437 20.3105 16.3722 21.139 17.3985 21.139H28.5523C29.5786 21.139 30.4071 20.3105 30.4071 19.2842C30.4071 18.2578 29.5786 17.4293 28.5523 17.4293Z"/>
                                        <path d="M32.4226 29.4611C26.2645 31.3406 19.6861 31.3406 13.5404 29.4487L2.6958 26.1471V40.1696C2.6958 42.2223 4.36515 43.8917 6.4302 43.904H39.5204C41.5731 43.904 43.2424 42.2347 43.2548 40.1696V26.1471L32.4226 29.4611Z"/>
                                        <path d="M42.3274 11.0983H3.6727C3.64797 11.0983 3.6356 11.0983 3.62324 11.0983C1.60765 11.123 -0.0122366 12.78 0.000128941 14.7956V19.9273C-0.0122366 21.4235 0.865718 22.7714 2.2383 23.3525C2.2383 23.3649 2.22593 23.3649 2.22593 23.3649C2.33722 23.4144 2.44851 23.4515 2.5598 23.4886L14.2824 27.0746C19.9581 28.8181 26.0173 28.8181 31.6931 27.0746L43.4033 23.4886H43.4156C43.5269 23.4515 43.6506 23.402 43.7619 23.3525C43.7742 23.3525 43.7742 23.3402 43.7866 23.3402C45.1221 22.7466 45.9877 21.4111 45.9753 19.9396H46V14.7956C46 14.7708 46 14.7585 46 14.7461C45.9877 12.7305 44.343 11.0983 42.3274 11.0983ZM28.5522 23.6122H17.3985C16.2485 23.6122 15.1479 23.1547 14.3318 22.3509C14.3318 22.3386 14.3195 22.3386 14.3195 22.3386C13.5157 21.5348 13.0582 20.4343 13.0582 19.2843C13.0705 16.8853 15.0119 14.9563 17.3985 14.9563H28.5522C29.7022 14.944 30.8027 15.4015 31.6189 16.2052C32.435 17.0337 32.8802 18.1219 32.8802 19.2719C32.8925 21.6708 30.9511 23.6122 28.5522 23.6122Z"/>
                                        <path d="M27.7484 2.09607H17.5097C16.5204 2.10843 15.5807 2.50413 14.8882 3.20897C14.1957 3.91381 13.8124 4.85359 13.8248 5.83047V9.51541H16.2979V5.8181C16.2979 5.48423 16.4215 5.17509 16.6565 4.94015C16.8914 4.7052 17.2006 4.56918 17.5221 4.56918H27.736C28.4532 4.58155 29.022 5.138 29.0344 5.84284V9.51541H31.5075V5.8181C31.4951 3.74069 29.8382 2.10843 27.7484 2.09607Z"/>
                                    </g>
                                    <defs>
                                        <linearGradient id="cashbox_gradient" x1="18.4439" y1="17.7234" x2="19.1981" y2="22.4275" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#24CAFF"/>
                                            <stop offset="1" stop-color="#2461FF"/>
                                        </linearGradient>
                                        <clipPath id="clip0">
                                            <rect width="46" height="46" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <p>Касса бизнеса</p>
                    </div>
                    <div className={styles.menuButton} onClick={() => addPage(<BankTransfer />)}>
                        <div className={styles.buttonIconWrapper}>
                            <div className={styles.buttonIcon}>
                                <svg width="46" height="46" viewBox="0 0 46 46" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.71313 38.4604V43.8443C3.72345 45.0407 4.70326 46.0102 5.89967 45.9999H27.27C28.4767 45.9999 29.4978 45.0407 29.4978 43.8443V38.4604H3.71313ZM16.5848 45.4017C14.8418 45.4017 13.4185 43.9887 13.4185 42.2353C13.4185 40.4923 14.8315 39.069 16.5848 39.069C18.3279 39.069 19.7512 40.482 19.7512 42.2353C19.7512 43.9784 18.3382 45.4017 16.5848 45.4017Z"/>
                                    <path d="M16.5848 41.1215C15.9763 41.1215 15.4812 41.6165 15.4812 42.225C15.4812 42.8439 15.9763 43.3286 16.5848 43.3286C17.1933 43.3286 17.6884 42.8336 17.6884 42.225C17.6884 41.6165 17.1933 41.1215 16.5848 41.1215Z" fill="white"/>
                                    <path d="M19.4418 12.6862H29.4978V8.04492H3.71313V36.408H29.4978V31.3542H28.8377L24.7843 35.2632C24.5884 35.4591 24.3305 35.5623 24.0624 35.5726C23.918 35.5726 23.7839 35.5417 23.6498 35.4901C23.2579 35.3354 23.0104 34.9538 23 34.5412V31.3439H19.4418C19.4314 31.3439 19.4108 31.3439 19.3902 31.3439C18.8642 31.3233 18.4413 30.8798 18.4619 30.3435V13.7279C18.4619 13.1606 18.8745 12.6862 19.4418 12.6862Z"/>
                                    <path d="M20.5247 14.7386V29.2812H24.0726C24.6399 29.2812 25.0628 29.7762 25.0628 30.3435V32.1072L27.6825 29.5906C27.8784 29.3946 28.1363 29.2915 28.4148 29.2812H42.2869V14.7386H20.5247ZM32.5919 27.6619V27.796C32.5919 28.3632 32.1277 28.8274 31.5605 28.8274C30.9932 28.8274 30.5291 28.3632 30.5291 27.796V27.6619C29.147 27.2184 28.2085 25.9395 28.2085 24.4852C28.2085 24.4749 28.2085 24.4749 28.2085 24.4646C28.2188 23.8974 28.6829 23.4332 29.2502 23.4435C29.8174 23.4539 30.2816 23.918 30.2713 24.4852C30.2713 25.1866 30.8385 25.7642 31.5502 25.7642C31.5605 25.7642 31.5605 25.7642 31.5605 25.7538C32.2618 25.7538 32.8394 25.1763 32.8291 24.4646C32.8291 23.7633 32.2515 23.1857 31.5399 23.196C30.0959 23.196 28.8067 22.2574 28.3632 20.8754C27.7959 19.122 28.7551 17.2346 30.5188 16.6673V16.5745C30.5188 16.0073 30.9829 15.5431 31.5502 15.5431C32.1174 15.5431 32.5816 16.0073 32.5816 16.5745V16.6673C33.9636 17.1211 34.8919 18.4001 34.8919 19.8543C34.8919 20.4113 34.438 20.8651 33.8708 20.8754C33.3035 20.8857 32.8394 20.4216 32.8291 19.8543C32.8291 19.844 32.8291 19.844 32.8291 19.844C32.8291 19.1323 32.2515 18.5651 31.5399 18.5651C30.8282 18.5651 30.2609 19.1427 30.2609 19.8543C30.2609 20.566 30.8385 21.1332 31.5502 21.1332C33.0044 21.1332 34.2833 22.0615 34.7371 23.4435C35.3044 25.2072 34.3452 27.0946 32.5919 27.6619Z"/>
                                    <path d="M27.27 8.15352e-05H5.89967C4.70326 -0.0102323 3.72345 0.959269 3.71313 2.15568V5.98211H29.4978V2.15568C29.4978 0.959269 28.4664 8.15352e-05 27.27 8.15352e-05ZM20.0606 3.70275H13.1091C12.5418 3.70275 12.0777 3.23863 12.0777 2.67137C12.0777 2.10411 12.5418 1.63998 13.1091 1.63998H20.0606C20.6279 1.63998 21.092 2.10411 21.092 2.67137C21.092 3.23863 20.6279 3.70275 20.0606 3.70275Z"/>
                                    <defs>
                                        <linearGradient id="transfer_gradient" x1="7.01483" y1="38.9661" x2="9.01069" y2="48.9122" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#FC53FF"/>
                                            <stop offset="1" stop-color="#FF539B"/>
                                        </linearGradient>
                                    </defs>
                                </svg>

                            </div>
                        </div>
                        <p>Перевести деньги</p>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    bank: state.bank,
    pages: state.bankPages
});

const mapDispatchToProps = dispatch => ({
    addPage: page => dispatch(addBankPage(page)),
    setPage: page => dispatch(setBankPage(page))
});

export default connect(mapStateToProps, mapDispatchToProps)(BankMenu);