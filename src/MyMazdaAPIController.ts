import MyMazdaAPIConnection from "./MyMazdaAPIConnection";
import type { RegionCode } from "./MyMazdaAPIConnection";

interface APIBaseResponse {
    resultCode: string,
    visitNo: string
}

interface DoorLockAPIResponse extends APIBaseResponse {
    message: string
}

interface DoorUnlockAPIResponse extends APIBaseResponse {
    message: string
}

interface LightOnAPIResponse extends APIBaseResponse {
    message: string
}

interface LightOffAPIResponse extends APIBaseResponse {
    message: string
}

interface EngineStartAPIResponse extends APIBaseResponse {
    message: string
}

interface EngineStopAPIResponse extends APIBaseResponse {
    message: string
}

interface GetNickNameAPIResponse extends APIBaseResponse {
    carlineDesc: string
}

interface UpdateNickNameAPIResponse extends APIBaseResponse {
    message: string
}

interface GetVecBaseInfoAPIResponse extends APIBaseResponse {
    vecBaseInfos: {
        Vehicle: {
            handlePosition: string,
            primaryUserRegistrationDateTime: string,
            vehicleInformation: string,
            retailDate: string,
            cvCautionsPerm: {} | PermAPIObject,
            cvTermsAndConditionsPerm: {} | PermAPIObject,
            freeData: string,
            onetimePassAuthenticationDateTime: string,
            cvHelpnetPerm: {} | PermAPIObject,
            startDateTime: string,
            cvPrivacyPerm: {} | PermAPIObject,
            CvInformation: {
                iccId: string,
                tcuDestination: number,
                tcuVersion: string,
                internalVin: number,
                modelSpecificationCode: string,
                imei: string,
                cmuVersion: string,
                tcuModelYear: number
            },
            countryCode: string,
            startCompletionDateTime: string
        },
        econnectType: number,
        vin: string,
        vehicleType: number
    }[],
    vehicleFlags: {
        vinRegistStatus: number,
        primaryFlag: number
    }[]
}

interface PermAPIObject {
    time: string,
    locale: string,
    version: string
}

interface TPMSInformation {
    FLTPrsDispBar: number,
    MntTyreAtFlg: number,
    FLTPrsDispKP: number,
    RLTPrsDispKgfPcm2: number,
    FLTPrsDispPsi: number,
    FRTPrsDispPsi: number,
    FRTPrsDispKgfPcm2: number,
    RRTPrsDispBar: number,
    TPrsDispMinute: number,
    TPrsDispYear: number,
    RRTPrsDispPsi: number,
    TPrsDispMonth: number,
    RLTPrsDispKP: number,
    RRTyrePressWarn: number,
    TPMSSystemFlt: number,
    RLTyrePressWarn: number,
    RLTPrsDispBar: number,
    FRTyrePressWarn: number,
    FLTPrsDispKgfPcm2: number,
    RRTPrsDispKgfPcm2: number,
    TPrsDispDate: number,
    RRTPrsDispKP: number,
    TPMSStatus: number,
    FRTPrsDispKP: number,
    RLTPrsDispPsi: number,
    FLTyrePressWarn: number,
    FRTPrsDispBar: number,
    TPrsDispHour: number
}

interface VehicleStatusAPIResponse extends APIBaseResponse {
    alertInfos: {
        TnsLight: {
            LightSwState: number,
            LightCombiSWMode: number,
            TnsLamp: number
        },
        HazardLamp: {
            HazardSw: number
        },
        UsbPositionAccuracy: number,
        Pw: {
            PwPosRr: 0 | 1,
            PwPosDrv: 0 | 1,
            PwPosPsngr: 0 | 1,
            PwPosRl: 0 | 1
        },
        PositionInfo: {
            AcquisitionDatetime: string,
            Latitude: number,
            LatitudeFlag: number,
            Longitude: number,
            LongitudeFlag: number
        },
        OccurrenceDate: string,
        PositionInfoCategory: number,
        Door: {
            SrTiltSignal: number,
            FuelLidOpenStatus: number,
            DrStatHood: number,
            LockLinkSwRr: number,
            DrStatRr: number,
            LockLinkSwRl: number,
            DrStatPsngr: number,
            DrStatDrv: number,
            SrSlideSignal: number,
            AllDrSwSignal: number,
            DrStatRl: number,
            DrOpnWrn: number,
            LockLinkSwDrv: number,
            DrStatTrnkLg: number,
            LockLinkSwPsngr: number
        },
        DcmPositionAccuracyEntity: object
    }[],
    remoteInfos: {
        ResidualFuel: {
            RemDrvDistDActlMile: number,
            RemDrvDistDActlKm: number,
            FuelSegementDActl: number
        },
        RegularMntInformation: {
            MntSetDistKm: number,
            MntSetDistMile: number
        },
        DriveInformation: {
            Drv1AvlFuelG: number,
            Drv1AvlFuelE: number,
            Drv1AmntFuel: number,
            OdoDispValue: number,
            Drv1Distnc: number,
            OdoDispValueMile: number,
            Drv1DrvTm: number
        },
        TPMSInformation: TPMSInformation,
        SeatBeltInformation: {
            FirstRowBuckleDriver: number,
            RLOCSStatDACtl: number,
            OCSStatus: number,
            RROCSStatDActl: number,
            SeatBeltWrnDRq: number,
            RCOCSStatDActl: number,
            SeatBeltStatDActl: string,
            FirstRowBucklePsngr: number
        },
        ElectricalInformation: {
            PowerControlStatus: number,
            EngineState: number
        },
        BatteryStatus: {
            SocEcmAEst: number
        },
        UsbPositionAccuracy: number,
        MntSCRInformation: {
            UreaTankLevel: number,
            RemainingMileage: number,
            MntSCRAtFlg: number
        },
        OccurrenceDate: string,
        PositionInfo: {
            AcquisitionDatetime: string,
            Latitude: number,
            LatitudeFlag: number,
            Longitude: number,
            LongitudeFlag: number
        },
        PositionInfoCategory: number,
        OilMntInformation: {
            RemOilDistMile: number,
            DROilDeteriorateLevel: number,
            MntOilAtFlg: number,
            OilDtrInitTime: number,
            OilDeteriorateWarning: number,
            OilDtrInitDistMile: number,
            OilLevelWarning: number,
            RemOilDistK: number,
            MntOilLvlAtFlg: number,
            OilDtrInitDistKm: number,
            OilLevelSensWarnBRq: number,
            OilLevelStatusMonitor: number
        },
        WguidStatus: object,
        DcmPositionAccuracyEntity: object
    }[]
}

interface HealthReportAPIResponse extends APIBaseResponse {
    remoteInfos: {
        WngRearFogLamp: number,
        WngOilShortage: number,
        RegularMntInformation: {
            RemRegDistMile: number,
            MntSetDistMile: number,
            MntSetDistKm: number
        },
        WngTurnLamp: 0,
        WngOilAmountExceed: number,
        TPMSInformation: TPMSInformation,
        WngTyrePressureLow: number,
        OdoDispValue: number,
        WngTailLamp: 0,
        WngTpmsStatus: 0,
        WngHeadLamp: 0,
        WngSmallLamp: 0,
        WngBreakLamp: 0,
        OccurrenceDate: string,
        OilMntInformation: {
            RemOilDistK: number
        },
        OdoDispValueMile: number,
        WngBackLamp: number
    }[]
}

export default class MyMazdaAPIController {
    private connection: MyMazdaAPIConnection;

    constructor(email: string, password: string, region: RegionCode) {
        this.connection = new MyMazdaAPIConnection(email, password, region);
    }

    async getTac() {
        return await this.connection.apiRequest(true, false, {
            url: "content/getTac/v4"
        });
    }

    async getLanguagePkg() {
        return await this.connection.apiRequest(true, false, {
            url: "junction/getLanguagePkg/v4",
            method: "POST",
            json: {
                "platformType": "ANDROID",
                "region": "MNAO",
                "version": "2.0.4"
            }
        });
    }

    async getVecBaseInfos(): Promise<GetVecBaseInfoAPIResponse> {
        return await this.connection.apiRequest<GetVecBaseInfoAPIResponse>(true, true, {
            url: "remoteServices/getVecBaseInfos/v4",
            method: "POST",
            json: {
                "internaluserid": "__INTERNAL_ID__"
            }
        });
    }

    async getVehicleCodeWithTrims() {
        return await this.connection.apiRequest(true, true, {
            url: "vehicle/getVehicleCodeWithTrims/v4"
        });
    }

    async gasStationSearch(lat: string, lon: string) {
        return await this.connection.apiRequest(true, true, {
            url: "poi/gasStationSearch/v4",
            searchParams: {
                "proximity": `${lon},${lat}`,
                "query": "",
                "location": `${lat},${lon}`,
                "language": "en"
            }
        });
    }

    // This request only works for Europe region
    async getCountryNscMapping() {
        return await this.connection.apiRequest(true, false, {
            url: "miox/getCountryNscMapping/v4"
        });
    }

    async getBaseContent(trim: string, year: string | number, vin: string, model: string, mdlCode: string): Promise<object> {
        return await this.connection.apiRequest<object>(true, true, {
            url: "content/getBaseContent/v4",
            searchParams: {
                "trim": trim,
                "year": year,
                "vin": vin,
                "model": model,
                "mdlCode": mdlCode
            }
        });
    }

    async getVehicleStatus(internalVin: number) {
        let response = await this.connection.apiRequest<VehicleStatusAPIResponse>(true, true, {
            url: "remoteServices/getVehicleStatus/v4",
            method: "POST",
            json: {
                "internaluserid": "__INTERNAL_ID__",
                "internalvin": internalVin,
                "limit": 1,
                "offset": 0,
                "vecinfotype": "0"
            }
        });

        if (response.resultCode !== "200S00") throw new Error("Failed to get vehicle status");

        return response;
    }

    async getHealthReport(internalVin: number) {
        let response = await this.connection.apiRequest<HealthReportAPIResponse>(true, true, {
            url: "remoteServices/getHealthReport/v4",
            method: "POST",
            json: {
                "internaluserid": "__INTERNAL_ID__",
                "internalvin": internalVin,
                "limit": 1,
                "offset": 0
            }
        });

        if (response.resultCode !== "200S00") throw new Error("Failed to get vehicle health report");

        return response;
    }

    async doorUnlock(internalVin: number): Promise<void> {
        let response = await this.connection.apiRequest<DoorUnlockAPIResponse>(true, true, {
            url: "remoteServices/doorUnlock/v4",
            method: "POST",
            json: {
                "internaluserid": "__INTERNAL_ID__",
                "internalvin": internalVin
            }
        });

        if (response.resultCode !== "200S00") throw new Error(response.message);
    }

    async doorLock(internalVin: number): Promise<void> {
        let response = await this.connection.apiRequest<DoorLockAPIResponse>(true, true, {
            url: "remoteServices/doorLock/v4",
            method: "POST",
            json: {
                "internaluserid": "__INTERNAL_ID__",
                "internalvin": internalVin
            }
        });

        if (response.resultCode !== "200S00") throw new Error(response.message);
    }

    async lightOn(internalVin: number): Promise<void> {
        let response = await this.connection.apiRequest<LightOnAPIResponse>(true, true, {
            url: "remoteServices/lightOn/v4",
            method: "POST",
            json: {
                "internaluserid": "__INTERNAL_ID__",
                "internalvin": internalVin
            }
        });

        if (response.resultCode !== "200S00") throw new Error(response.message);
    }

    async lightOff(internalVin: number): Promise<void> {
        let response = await this.connection.apiRequest<LightOffAPIResponse>(true, true, {
            url: "remoteServices/lightOff/v4",
            method: "POST",
            json: {
                "internaluserid": "__INTERNAL_ID__",
                "internalvin": internalVin
            }
        });

        if (response.resultCode !== "200S00") throw new Error(response.message);
    }

    async engineStart(internalVin: number): Promise<void> {
        let response = await this.connection.apiRequest<EngineStartAPIResponse>(true, true, {
            url: "remoteServices/engineStart/v4",
            method: "POST",
            json: {
                "internaluserid": "__INTERNAL_ID__",
                "internalvin": internalVin
            }
        });

        if (response.resultCode !== "200S00") throw new Error(response.message);
    }

    async engineStop(internalVin: number): Promise<void> {
        let response = await this.connection.apiRequest<EngineStopAPIResponse>(true, true, {
            url: "remoteServices/engineStop/v4",
            method: "POST",
            json: {
                "internaluserid": "__INTERNAL_ID__",
                "internalvin": internalVin
            }
        });

        if (response.resultCode !== "200S00") throw new Error(response.message);
    }

    async getNickName(vin: string): Promise<string> {
        if (vin.length !== 17) throw new Error("Invalid VIN");

        let response = await this.connection.apiRequest<GetNickNameAPIResponse>(true, true, {
            url: "remoteServices/getNickName/v4",
            method: "POST",
            json: {
                "internaluserid": "__INTERNAL_ID__",
                "vin": vin
            }
        });

        if (response.resultCode !== "200S00") throw new Error("Failed to get vehicle nickname");

        return response.carlineDesc;
    }

    async updateNickName(vin: string, nickName: string): Promise<void> {
        if (vin.length !== 17) throw new Error("Invalid VIN");
        if (nickName.length > 20) throw new Error("Nickname is too long");

        let response = await this.connection.apiRequest<UpdateNickNameAPIResponse>(true, true, {
            url: "remoteServices/updateNickName/v4",
            method: "POST",
            json: {
                "internaluserid": "__INTERNAL_ID__",
                "vin": vin,
                "vtitle": nickName
            }
        });

        if (response.resultCode !== "200S00") throw new Error("Failed to update vehicle nickname");
    }
}