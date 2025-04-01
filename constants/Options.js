export const SelectTravellerList = [
    {
        id:1,
        title: 'Kendim',
        desc: 'Özgürlüğün tadını çıkararak yeni yerler keşfedin.',
        icon:'🛫',
        people:'1'

    },
    {
        id:2,
        title: 'Çift',
        desc: 'Sevgiliniz veya eşinizle unutulmaz anılar biriktirin.',
        icon:'🥂',
        people:'2 Kişi'

    },
    {
        id:3,
        title: 'Aile',
        desc: 'Ailenizle birlikte tatilin tadını çıkarın.',
        icon:'🏡',
        people:'3-7 Kişi'

    },
    {
        id:4,
        title: 'Arkadaşlar',
        desc: 'Arkadaşlarınızla birlikte eğlenceli bir tatil yapın.',
        icon:'⛵️',
        people:'3-10 Kişi'

    }

]

export const SelectBudgetList = [
    {
        id:1,
        title: 'Ekonomik',
        desc: 'Daha az harcama yaparak tatilin tadını çıkarın.',
        icon:'💰',
    },
    {
        id:2,
        title: 'Orta',
        desc: 'Ortalama harcama yaparak tatilin tadını çıkarın.',
        icon:'💸',
    },
    {
        id:3,
        title: 'Lüks',
        desc: 'Daha fazla harcama yaparak tatilin tadını çıkarın.',
        icon:'💎',
    }
]

// export const AI_PROMPT='Belirtilen Konum için Seyahat Planı Oluşturun: {location}, {totalDay} Gün ve {totalNight} Gece için {traveler} için {budget} bütçeyle Uçuş ayrıntıları, Rezervasyon URLsi ile Uçuş Fiyatı, HotelName ile Otel seçenekleri listesi, Otel adresi , Fiyat, otel resmi URLsi, coğrafi koordinatlar, derecelendirme, açıklamalar ve placeName, Yer Ayrıntıları, Yer Görüntüsü URLsi, Coğrafi Koordinatlar, bilet Fiyatlandırması, her bir konuma seyahat süresi ile yakınlarda ziyaret edilecek yerler {totalDays} gün ve {totalNight} gece ile her gün JSON formatında ziyaret edilecek en iyi zamanı içeren plan.'
export const AI_PROMPT='Belirlenen Konum için Seyahat Planı Oluştur: {location} konumunda {totalDay} gün ve {totalNight} gece için kişiler:{traveler} ve bütçe:{budget} özelliklerini dikkate alarak bir plan oluştur. Plan uçuş detaylarını(ücretlerini, bilet alınabilecek urlleri, vs) otel seçeneklerini(otel adı, adresi, ücreti, resim için Google Maps photoReference ı, coğrafi kordinatlarını, değerlendirmesini, açıklamasını) ve gezilmesi gereken yerleri(yer adı, detayları, resim için Google Maps PhotoReference ı, coğrafi kordinatları, bilet fiyatları) içermeli. Her konuma seyahat süresi {totalDays} gün ve {totalNight} gece için en uygun gezme saatleri ile ayrı ayrı günlük planlar oluştur. Cevabı JSON formatında parametre adlarını ingilizce cevapları türkçe dilinde vermeni istiyorum. Cevaplarda türkçe karakterleri istediğin gibi kullanabilirsin. Gerçek web sitesi bağlantıları ve gerçek resim bağlantıları kullan. Resim bağlantıları için google maps apı kullanıyorum fotoğraf referanslarını buna göre ver'

// export const AI_PROMPT = 'Belirlenen Konum için Seyahat Planı Oluştur:'+
// '{location} konumunda {totalDay} gün ve {totalNight} gece için kişiler: {traveler} ve bütçe: {budget} özelliklerini dikkate alarak bir plan oluştur. Plan aşağıdaki bilgileri içermeli:'+
// '1. Uçuş detayları: Ücretler, bilet alınabilecek URLler vb.'+
// '2. Otel seçenekleri: Otel adı, adresi, ücreti, resim için Google Maps photoReferenceı, coğrafi koordinatları, değerlendirmesi, açıklaması.'+
// '3. Gezilmesi gereken yerler: Yer adı, detayları, resim için Google Maps photoReferenceı, coğrafi koordinatları, bilet fiyatları.'+
// '4. Her konuma seyahat süresi {totalDays} gün ve {totalNight} gece için en uygun gezme saatleri ile ayrı ayrı günlük planlar oluşturulmalı.'+
// 'Cevapları JSON formatında, parametre adlarını İngilizce ve içerikleri Türkçe olacak şekilde vereceksiniz. Türkçe karakterleri doğru bir şekilde kullanabilir ve gerçek web sitesi bağlantıları ile fotoğraf referansları sağlamalısınız. Fotoğraf referansları için Google Maps API kullanıyorum; lütfen fotoğraf referanslarını buna göre ver.';
