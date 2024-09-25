export interface FanArtDetails {
    srcPath: string,
    username: string,
    rowSpan?: number,
    colSpan?: number,
};

export const FAN_ART_IMAGES: readonly FanArtDetails[] = [
    {srcPath: '/assets/fanart-page/g_g_blu_2.png', username: '格格藍@G_g_blu', colSpan: 3},
    {srcPath: '/assets/fanart-page/sirius_1.png', username: 'Sirius!!', colSpan: 2},
    {srcPath: '/assets/fanart-page/mysterious_lilac_caeli_1.JPG', username: 'MysteriousLilac (Caeli)', colSpan: 2},
    {srcPath: '/assets/fanart-page/g_g_blu_1.png', username: '格格藍@G_g_blu', colSpan: 3},
    {srcPath: '/assets/fanart-page/kb_2.jpg', username: '@kb_idiots', colSpan: 2},
    {srcPath: '/assets/fanart-page/kb_4.jpg', username: '@kb_idiots', colSpan: 2},
    {srcPath: '/assets/fanart-page/kb_3.jpg', username: '@kb_idiots', colSpan: 2},
    {srcPath: '/assets/fanart-page/kb_1.jpg', username: '@kb_idiots', colSpan: 2},
    {srcPath: '/assets/fanart-page/jellybanana_1.png', username: 'jellybanana', colSpan: 3},
    {srcPath: '/assets/fanart-page/myromanempirerendered.png', username: '@borkienoucessie', colSpan: 3},
    {srcPath: '/assets/fanart-page/kittoes_1.png', username: '@kittoesonx (kittoes)', colSpan:2},
    {srcPath: '/assets/fanart-page/lookkaew_1.png', username: '@lookkaew777', rowSpan: -2, colSpan: 2}
];