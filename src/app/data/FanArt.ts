export interface FanArtDetails {
    srcPath: string,
    username: string,
    rowSpan?: number,
    colSpan?: number,
};

export const FAN_ART_IMAGES: readonly FanArtDetails[] = [
    {srcPath: '/assets/fanart-page/g_g_blu_2.png', username: '格格藍@G_g_blu', colSpan: 2},
    {srcPath: '/assets/fanart-page/kb_2.jpg', username: '@kb_idiots'},
    {srcPath: '/assets/fanart-page/jellybanana_1.png', username: 'jellybanana'},
    {srcPath: '/assets/fanart-page/sirius_1.png', username: 'Sirius!!'},
    {srcPath: '/assets/fanart-page/kb_3.jpg', username: '@kb_idiots', rowSpan: 2},
    {srcPath: '/assets/fanart-page/kb_4.jpg', username: '@kb_idiots'},
    {srcPath: '/assets/fanart-page/kb_1.jpg', username: '@kb_idiots', rowSpan: 2},
    {srcPath: '/assets/fanart-page/kittoes_1.png', username: '@kittoesonx (kittoes)'},
    {srcPath: '/assets/fanart-page/lookkaew_1.png', username: '@lookkaew777'},
    {srcPath: '/assets/fanart-page/mysterious_lilac_caeli_1.JPG', username: 'MysteriousLilac (Caeli)'},
    {srcPath: '/assets/fanart-page/g_g_blu_1.png', username: '格格藍@G_g_blu'},
];