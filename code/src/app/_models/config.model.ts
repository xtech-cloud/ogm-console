export interface IAppConfig {
    api: {
        ams: string;
        kms: string;
        bla : {
            mlb: string;
        };
        msa: {
            account: string;
            license: string;
            analytics: string;
            activity: string;
        }
    };
    web: {
        consul: string;
        micro: string;
    };
}
