import { isMovieAdded } from './commonService';

describe('Test is movie added functionality', () => {
  const userMovies = [
    {
      data: {
        adult: false,
        backdrop_path: '/7OMAfDJikBxItZBIug0NJig5DHD.jpg',
        belongs_to_collection: null,
        budget: 0,
        genres: [
          {
            id: 10749,
            name: 'Romance'
          },
          {
            id: 16,
            name: 'Animation'
          },
          {
            id: 18,
            name: 'Drama'
          }
        ],
        homepage: 'https://www.funimationfilms.com/movie/yourname/',
        id: 372058,
        imdb_id: 'tt5311514',
        original_language: 'ja',
        original_title: '君の名は。',
        overview:
          'High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.',
        popularity: 23.918,
        poster_path: '/xq1Ugd62d23K2knRUx6xxuALTZB.jpg',
        production_companies: [
          {
            id: 3756,
            logo_path: '/dH51ZYZnD7ezWMqZCItuvATr2j8.png',
            name: 'CoMix Wave Films',
            origin_country: 'JP'
          }
        ],
        production_countries: [
          {
            iso_3166_1: 'JP',
            name: 'Japan'
          }
        ],
        release_date: '2016-08-26',
        revenue: 355398372,
        runtime: 106,
        spoken_languages: [
          {
            iso_639_1: 'ja',
            name: '日本語'
          }
        ],
        status: 'Released',
        tagline: '',
        title: 'Your Name.',
        video: false,
        vote_average: 8.6,
        vote_count: 3882
      },
      status: 200,
      statusText: 'OK',
      headers: {
        'last-modified': '2019-04-01 08:02:45 +0000',
        etag: 'W/"0a175184ab6dc6cc7362f53bc7bcaafc"',
        'x-ratelimit-remaining': '39',
        'content-type': 'application/json;charset=utf-8',
        'cache-control': 'public, max-age=28800',
        'x-ratelimit-reset': '1554744521',
        'x-ratelimit-limit': '40'
      },
      config: {
        transformRequest: {},
        transformResponse: {},
        timeout: 0,
        xsrfCookieName: 'XSRF-TOKEN',
        xsrfHeaderName: 'X-XSRF-TOKEN',
        maxContentLength: -1,
        headers: {
          Accept: 'application/json, text/plain, */*'
        },
        method: 'get',
        url:
          'https://api.themoviedb.org/3/movie/372058?api_key=4f4f0d30ce7338e679e02e58c211e9bb&page=1'
      },
      request: {}
    },
    {
      data: {
        adult: false,
        backdrop_path: '/3md49VBCeqY6MSNyAVY6d5eC6bA.jpg',
        belongs_to_collection: {
          id: 119674,
          name: 'Psycho Collection',
          poster_path: '/29pDqAgmb4idzWzuZncoT7LZplA.jpg',
          backdrop_path: '/bPQZkZjNnsYuPZWzoRRl9k0VSQ8.jpg'
        },
        budget: 806948,
        genres: [
          {
            id: 27,
            name: 'Horror'
          }
        ],
        homepage: null,
        id: 539,
        imdb_id: 'tt0054215',
        original_language: 'en',
        original_title: 'Psycho',
        overview:
          'When larcenous real estate clerk Marion Crane goes on the lam with a wad of cash and hopes of starting a new life, she ends up at the notorious Bates Motel, where manager Norman Bates cares for his housebound mother. The place seems quirky, but fine… until Marion decides to take a shower.',
        popularity: 18.98,
        poster_path: '/81d8oyEFgj7FlxJqSDXWr8JH8kV.jpg',
        production_companies: [
          {
            id: 10717,
            logo_path: null,
            name: 'Shamley Productions',
            origin_country: 'US'
          }
        ],
        production_countries: [
          {
            iso_3166_1: 'US',
            name: 'United States of America'
          }
        ],
        release_date: '1960-06-16',
        revenue: 32000000,
        runtime: 109,
        spoken_languages: [
          {
            iso_639_1: 'en',
            name: 'English'
          }
        ],
        status: 'Released',
        tagline: 'A new—and altogether different—screen excitement!!!',
        title: 'Psycho',
        video: false,
        vote_average: 8.4,
        vote_count: 4710
      },
      status: 200,
      statusText: 'OK',
      headers: {
        'last-modified': '2019-03-31 14:08:09 +0000',
        etag: 'W/"27dfb6fbca58e5af499dcfff9da28c44"',
        'x-ratelimit-remaining': '35',
        'content-type': 'application/json;charset=utf-8',
        'cache-control': 'public, max-age=28800',
        'x-ratelimit-reset': '1554731919',
        'x-ratelimit-limit': '40'
      },
      config: {
        transformRequest: {},
        transformResponse: {},
        timeout: 0,
        xsrfCookieName: 'XSRF-TOKEN',
        xsrfHeaderName: 'X-XSRF-TOKEN',
        maxContentLength: -1,
        headers: {
          Accept: 'application/json, text/plain, */*'
        },
        method: 'get',
        url:
          'https://api.themoviedb.org/3/movie/539?api_key=4f4f0d30ce7338e679e02e58c211e9bb&page=1'
      },
      request: {}
    },
    {
      data: {
        adult: false,
        backdrop_path: '/hqkIcbrOHL86UncnHIsHVcVmzue.jpg',
        belongs_to_collection: {
          id: 263,
          name: 'The Dark Knight Collection',
          poster_path: '/bqS2lMgGkuodIXtDILFWTSWDDpa.jpg',
          backdrop_path: '/xfKot7lqaiW4XpL5TtDlVBA9ei9.jpg'
        },
        budget: 185000000,
        genres: [
          {
            id: 18,
            name: 'Drama'
          },
          {
            id: 28,
            name: 'Action'
          },
          {
            id: 80,
            name: 'Crime'
          },
          {
            id: 53,
            name: 'Thriller'
          }
        ],
        homepage: 'http://thedarkknight.warnerbros.com/dvdsite/',
        id: 155,
        imdb_id: 'tt0468569',
        original_language: 'en',
        original_title: 'The Dark Knight',
        overview:
          'Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.',
        popularity: 32.83,
        poster_path: '/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg',
        production_companies: [
          {
            id: 9993,
            logo_path: '/2Tc1P3Ac8M479naPp1kYT3izLS5.png',
            name: 'DC Entertainment',
            origin_country: 'US'
          },
          {
            id: 429,
            logo_path: '/2Tc1P3Ac8M479naPp1kYT3izLS5.png',
            name: 'DC Comics',
            origin_country: 'US'
          },
          {
            id: 923,
            logo_path: '/5UQsZrfbfG2dYJbx8DxfoTr2Bvu.png',
            name: 'Legendary Entertainment',
            origin_country: 'US'
          },
          {
            id: 9996,
            logo_path: '/3tvBqYsBhxWeHlu62SIJ1el93O7.png',
            name: 'Syncopy',
            origin_country: 'GB'
          },
          {
            id: 174,
            logo_path: '/ky0xOc5OrhzkZ1N6KyUxacfQsCk.png',
            name: 'Warner Bros. Pictures',
            origin_country: 'US'
          }
        ],
        production_countries: [
          {
            iso_3166_1: 'GB',
            name: 'United Kingdom'
          },
          {
            iso_3166_1: 'US',
            name: 'United States of America'
          }
        ],
        release_date: '2008-07-16',
        revenue: 1004558444,
        runtime: 152,
        spoken_languages: [
          {
            iso_639_1: 'en',
            name: 'English'
          },
          {
            iso_639_1: 'zh',
            name: '普通话'
          }
        ],
        status: 'Released',
        tagline: 'Why So Serious?',
        title: 'The Dark Knight',
        video: false,
        vote_average: 8.4,
        vote_count: 18364
      },
      status: 200,
      statusText: 'OK',
      headers: {
        'last-modified': '2019-04-07 22:03:14 +0000',
        etag: 'W/"2bc4453ff362964cea1b6a034aacdc04"',
        'x-ratelimit-remaining': '39',
        'content-type': 'application/json;charset=utf-8',
        'cache-control': 'public, max-age=28800',
        'x-ratelimit-reset': '1554744359',
        'x-ratelimit-limit': '40'
      },
      config: {
        transformRequest: {},
        transformResponse: {},
        timeout: 0,
        xsrfCookieName: 'XSRF-TOKEN',
        xsrfHeaderName: 'X-XSRF-TOKEN',
        maxContentLength: -1,
        headers: {
          Accept: 'application/json, text/plain, */*'
        },
        method: 'get',
        url:
          'https://api.themoviedb.org/3/movie/155?api_key=4f4f0d30ce7338e679e02e58c211e9bb&page=1'
      },
      request: {}
    },
    {
      data: {
        adult: false,
        backdrop_path: '/52AfXWuXCHn3UjD17rBruA9f5qb.jpg',
        belongs_to_collection: null,
        budget: 63000000,
        genres: [
          {
            id: 18,
            name: 'Drama'
          }
        ],
        homepage: 'http://www.foxmovies.com/movies/fight-club',
        id: 550,
        imdb_id: 'tt0137523',
        original_language: 'en',
        original_title: 'Fight Club',
        overview:
          'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.',
        popularity: 29.748,
        poster_path: '/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg',
        production_companies: [
          {
            id: 508,
            logo_path: '/7PzJdsLGlR7oW4J0J5Xcd0pHGRg.png',
            name: 'Regency Enterprises',
            origin_country: 'US'
          },
          {
            id: 711,
            logo_path: '/tEiIH5QesdheJmDAqQwvtN60727.png',
            name: 'Fox 2000 Pictures',
            origin_country: 'US'
          },
          {
            id: 20555,
            logo_path: null,
            name: 'Taurus Film',
            origin_country: ''
          },
          {
            id: 54051,
            logo_path: null,
            name: 'Atman Entertainment',
            origin_country: ''
          },
          {
            id: 54052,
            logo_path: null,
            name: 'Knickerbocker Films',
            origin_country: 'US'
          },
          {
            id: 25,
            logo_path: '/qZCc1lty5FzX30aOCVRBLzaVmcp.png',
            name: '20th Century Fox',
            origin_country: 'US'
          },
          {
            id: 4700,
            logo_path: '/A32wmjrs9Psf4zw0uaixF0GXfxq.png',
            name: 'The Linson Company',
            origin_country: ''
          }
        ],
        production_countries: [
          {
            iso_3166_1: 'DE',
            name: 'Germany'
          },
          {
            iso_3166_1: 'US',
            name: 'United States of America'
          }
        ],
        release_date: '1999-10-15',
        revenue: 100853753,
        runtime: 139,
        spoken_languages: [
          {
            iso_639_1: 'en',
            name: 'English'
          }
        ],
        status: 'Released',
        tagline: 'Mischief. Mayhem. Soap.',
        title: 'Fight Club',
        video: false,
        vote_average: 8.4,
        vote_count: 15799
      },
      status: 200,
      statusText: 'OK',
      headers: {
        'last-modified': '2019-04-07 16:08:10 +0000',
        etag: 'W/"16e0df09a168e577041faf3e53a47190"',
        'x-ratelimit-remaining': '38',
        'content-type': 'application/json;charset=utf-8',
        'cache-control': 'public, max-age=28800',
        'x-ratelimit-reset': '1554744521',
        'x-ratelimit-limit': '40'
      },
      config: {
        transformRequest: {},
        transformResponse: {},
        timeout: 0,
        xsrfCookieName: 'XSRF-TOKEN',
        xsrfHeaderName: 'X-XSRF-TOKEN',
        maxContentLength: -1,
        headers: {
          Accept: 'application/json, text/plain, */*'
        },
        method: 'get',
        url:
          'https://api.themoviedb.org/3/movie/550?api_key=4f4f0d30ce7338e679e02e58c211e9bb&page=1'
      },
      request: {}
    },
    {
      data: {
        adult: false,
        backdrop_path: '/j9XKiZrVeViAixVRzCta7h1VU9W.jpg',
        belongs_to_collection: null,
        budget: 25000000,
        genres: [
          {
            id: 18,
            name: 'Drama'
          },
          {
            id: 80,
            name: 'Crime'
          }
        ],
        homepage: null,
        id: 278,
        imdb_id: 'tt0111161',
        original_language: 'en',
        original_title: 'The Shawshank Redemption',
        overview:
          'Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.',
        popularity: 36.801,
        poster_path: '/9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg',
        production_companies: [
          {
            id: 97,
            logo_path: '/7znWcbDd4PcJzJUlJxYqAlPPykp.png',
            name: 'Castle Rock Entertainment',
            origin_country: 'US'
          },
          {
            id: 174,
            logo_path: '/ky0xOc5OrhzkZ1N6KyUxacfQsCk.png',
            name: 'Warner Bros. Pictures',
            origin_country: 'US'
          }
        ],
        production_countries: [
          {
            iso_3166_1: 'US',
            name: 'United States of America'
          }
        ],
        release_date: '1994-09-23',
        revenue: 28341469,
        runtime: 142,
        spoken_languages: [
          {
            iso_639_1: 'en',
            name: 'English'
          }
        ],
        status: 'Released',
        tagline: 'Fear can hold you prisoner. Hope can set you free.',
        title: 'The Shawshank Redemption',
        video: false,
        vote_average: 8.7,
        vote_count: 12667
      },
      status: 200,
      statusText: 'OK',
      headers: {
        'last-modified': '2019-04-06 20:37:28 +0000',
        etag: 'W/"540f87fc8c548deebcaeded31ed77859"',
        'x-ratelimit-remaining': '39',
        'content-type': 'application/json;charset=utf-8',
        'cache-control': 'public, max-age=28800',
        'x-ratelimit-reset': '1554743644',
        'x-ratelimit-limit': '40'
      },
      config: {
        transformRequest: {},
        transformResponse: {},
        timeout: 0,
        xsrfCookieName: 'XSRF-TOKEN',
        xsrfHeaderName: 'X-XSRF-TOKEN',
        maxContentLength: -1,
        headers: {
          Accept: 'application/json, text/plain, */*'
        },
        method: 'get',
        url:
          'https://api.themoviedb.org/3/movie/278?api_key=4f4f0d30ce7338e679e02e58c211e9bb&page=1'
      },
      request: {}
    },
    {
      data: {
        adult: false,
        backdrop_path: '/af98P1bc7lJsFjhHOVWXQgNNgSQ.jpg',
        belongs_to_collection: null,
        budget: 22000000,
        genres: [
          {
            id: 18,
            name: 'Drama'
          },
          {
            id: 36,
            name: 'History'
          },
          {
            id: 10752,
            name: 'War'
          }
        ],
        homepage: 'http://www.schindlerslist.com/',
        id: 424,
        imdb_id: 'tt0108052',
        original_language: 'en',
        original_title: "Schindler's List",
        overview:
          'The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.',
        popularity: 22.074,
        poster_path: '/yPisjyLweCl1tbgwgtzBCNCBle.jpg',
        production_companies: [
          {
            id: 33,
            logo_path: '/8lvHyhjr8oUKOOy2dKXoALWKdp0.png',
            name: 'Universal Pictures',
            origin_country: 'US'
          },
          {
            id: 56,
            logo_path: '/cEaxANEisCqeEoRvODv2dO1I0iI.png',
            name: 'Amblin Entertainment',
            origin_country: 'US'
          }
        ],
        production_countries: [
          {
            iso_3166_1: 'US',
            name: 'United States of America'
          }
        ],
        release_date: '1993-12-15',
        revenue: 321365567,
        runtime: 195,
        spoken_languages: [
          {
            iso_639_1: 'de',
            name: 'Deutsch'
          },
          {
            iso_639_1: 'pl',
            name: 'Polski'
          },
          {
            iso_639_1: 'he',
            name: 'עִבְרִית'
          },
          {
            iso_639_1: 'en',
            name: 'English'
          }
        ],
        status: 'Released',
        tagline: 'Whoever saves one life, saves the world entire.',
        title: "Schindler's List",
        video: false,
        vote_average: 8.5,
        vote_count: 7707
      },
      status: 200,
      statusText: 'OK',
      headers: {
        'last-modified': '2019-03-31 18:21:50 +0000',
        etag: 'W/"7266978713ccd72cb82b1bf355a2cef4"',
        'x-ratelimit-remaining': '39',
        'content-type': 'application/json;charset=utf-8',
        'cache-control': 'public, max-age=28800',
        'x-ratelimit-reset': '1554744963',
        'x-ratelimit-limit': '40'
      },
      config: {
        transformRequest: {},
        transformResponse: {},
        timeout: 0,
        xsrfCookieName: 'XSRF-TOKEN',
        xsrfHeaderName: 'X-XSRF-TOKEN',
        maxContentLength: -1,
        headers: {
          Accept: 'application/json, text/plain, */*'
        },
        method: 'get',
        url:
          'https://api.themoviedb.org/3/movie/424?api_key=4f4f0d30ce7338e679e02e58c211e9bb&page=1'
      },
      request: {}
    },
    {
      data: {
        adult: false,
        backdrop_path: '/fCUIuG7y4YKC3hofZ8wsj7zhCpR.jpg',
        belongs_to_collection: null,
        budget: 3700000,
        genres: [
          {
            id: 16,
            name: 'Animation'
          },
          {
            id: 18,
            name: 'Drama'
          },
          {
            id: 10752,
            name: 'War'
          }
        ],
        homepage: null,
        id: 12477,
        imdb_id: 'tt0095327',
        original_language: 'ja',
        original_title: '火垂るの墓',
        overview:
          'In the final months of World War II, 14-year-old Seita and his sister Setsuko are orphaned when their mother is killed during an air raid in Kobe, Japan. After a falling out with their aunt, they move into an abandoned bomb shelter. With no surviving relatives and their emergency rations depleted, Seita and Setsuko struggle to survive.',
        popularity: 0.6,
        poster_path: '/4u1vptE8aXuzb5zauZTmikyectV.jpg',
        production_companies: [
          {
            id: 10342,
            logo_path: '/dT3UbXjca6TClutHJtr7GhkRALP.png',
            name: 'Studio Ghibli',
            origin_country: 'JP'
          }
        ],
        production_countries: [
          {
            iso_3166_1: 'JP',
            name: 'Japan'
          }
        ],
        release_date: '1988-04-16',
        revenue: 0,
        runtime: 89,
        spoken_languages: [
          {
            iso_639_1: 'ja',
            name: '日本語'
          }
        ],
        status: 'Released',
        tagline: '',
        title: 'Grave of the Fireflies',
        video: false,
        vote_average: 8.4,
        vote_count: 1939
      },
      status: 200,
      statusText: 'OK',
      headers: {
        'last-modified': '2019-01-04 19:59:30 +0000',
        etag: 'W/"6118d21a5991be68c7f121b3b266a149"',
        'x-ratelimit-remaining': '39',
        'content-type': 'application/json;charset=utf-8',
        'cache-control': 'public, max-age=28800',
        'x-ratelimit-reset': '1554744847',
        'x-ratelimit-limit': '40'
      },
      config: {
        transformRequest: {},
        transformResponse: {},
        timeout: 0,
        xsrfCookieName: 'XSRF-TOKEN',
        xsrfHeaderName: 'X-XSRF-TOKEN',
        maxContentLength: -1,
        headers: {
          Accept: 'application/json, text/plain, */*'
        },
        method: 'get',
        url:
          'https://api.themoviedb.org/3/movie/12477?api_key=4f4f0d30ce7338e679e02e58c211e9bb&page=1'
      },
      request: {}
    }
  ];

  // Positive test case - for a movie which exists
  it('Test for movie exists', () => {
    const output = isMovieAdded(539, userMovies);
    expect(output).toBeTruthy();
  });

  // Negative test case - for a movie which does not exist
  it('Test for movie does not exist', () => {
    const output = isMovieAdded(10000000, userMovies);
    expect(output).toBeFalsy();
  });

  // Negative test case - undefined value for userMovies
  it('Test for movie does not exist', () => {
    const output = isMovieAdded(10000000);
    expect(output).toBeFalsy();
  });
});
