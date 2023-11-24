import React, { useEffect } from 'react';

const GoogleTimelineChart = () => {
    useEffect(() => {
        // Load the Google Charts library
        const loadGoogleCharts = () => {
            const script = document.createElement('script');
            script.src = 'https://www.gstatic.com/charts/loader.js';
            script.onload = () => {
                window.google.charts.load("current", { packages: ["timeline"] });
                window.google.charts.setOnLoadCallback(drawChart);
            };
            document.head.appendChild(script);
        };

        // Draw the chart
        const drawChart = () => {
            var container = document.getElementById('example3.1');
            var chart = new window.google.visualization.Timeline(container);
            var dataTable = new window.google.visualization.DataTable();

            dataTable.addColumn({ type: 'string', id: 'Position' });
            dataTable.addColumn({ type: 'string', id: 'Name' });
            dataTable.addColumn({ type: 'date', id: 'Start' });
            dataTable.addColumn({ type: 'date', id: 'End' });
            dataTable.addRows([
                ['President', 'George Washington', new Date(1789, 3, 30), new Date(1797, 2, 4)],
                ['President', 'John Adams', new Date(1797, 2, 4), new Date(1801, 2, 4)],
                ['President', 'Thomas Jefferson', new Date(1801, 2, 4), new Date(1809, 2, 4)],
                ['President', 'James Madison', new Date(1809, 2, 4), new Date(1817, 2, 4)],
                ['President', 'James Monroe', new Date(1817, 2, 4), new Date(1825, 2, 4)],
                ['President', 'John Quincy Adams', new Date(1825, 2, 4), new Date(1829, 2, 4)],
                ['President', 'Andrew Jackson', new Date(1829, 2, 4), new Date(1837, 2, 4)],
                ['President', 'Martin Van Buren', new Date(1837, 2, 4), new Date(1841, 2, 4)],
                ['President', 'William Henry Harrison', new Date(1841, 2, 4), new Date(1841, 3, 4)],
                ['President', 'John Tyler', new Date(1841, 3, 4), new Date(1845, 2, 4)],
                ['President', 'James K. Polk', new Date(1845, 2, 4), new Date(1849, 2, 4)],
                ['President', 'Zachary Taylor', new Date(1849, 2, 4), new Date(1850, 6, 9)],
                ['President', 'Millard Fillmore', new Date(1850, 6, 9), new Date(1853, 2, 4)],
                ['President', 'Franklin Pierce', new Date(1853, 2, 4), new Date(1857, 2, 4)],
                ['President', 'James Buchanan', new Date(1857, 2, 4), new Date(1861, 2, 4)],
                ['President', 'Abraham Lincoln', new Date(1861, 2, 4), new Date(1865, 3, 15)],
                ['President', 'Andrew Johnson', new Date(1865, 3, 15), new Date(1869, 2, 4)],
                ['President', 'Ulysses S. Grant', new Date(1869, 2, 4), new Date(1877, 2, 4)],
                ['President', 'Rutherford B. Hayes', new Date(1877, 2, 4), new Date(1881, 2, 4)],
                ['President', 'James A. Garfield', new Date(1881, 2, 4), new Date(1881, 8, 19)],
                ['President', 'Chester A. Arthur', new Date(1881, 8, 19), new Date(1885, 2, 4)],
                ['President', 'Grover Cleveland', new Date(1885, 2, 4), new Date(1889, 2, 4)],
                ['President', 'Benjamin Harrison', new Date(1889, 2, 4), new Date(1893, 2, 4)],
                ['President', 'Grover Cleveland', new Date(1893, 2, 4), new Date(1897, 2, 4)], // Second term
                ['President', 'William McKinley', new Date(1897, 2, 4), new Date(1901, 8, 14)],
                ['President', 'Theodore Roosevelt', new Date(1901, 8, 14), new Date(1909, 2, 4)],
                ['President', 'William Howard Taft', new Date(1909, 2, 4), new Date(1913, 2, 4)],
                ['President', 'Woodrow Wilson', new Date(1913, 2, 4), new Date(1921, 2, 4)],
                ['President', 'Warren G. Harding', new Date(1921, 2, 4), new Date(1923, 7, 2)],
                ['President', 'Calvin Coolidge', new Date(1923, 7, 2), new Date(1929, 2, 4)],
                ['President', 'Herbert Hoover', new Date(1929, 2, 4), new Date(1933, 2, 4)],
                ['President', 'Franklin D. Roosevelt', new Date(1933, 2, 4), new Date(1945, 3, 12)],
                ['President', 'Harry S. Truman', new Date(1945, 3, 12), new Date(1953, 2, 4)],
                ['President', 'Dwight D. Eisenhower', new Date(1953, 2, 4), new Date(1961, 2, 4)],
                ['President', 'John F. Kennedy', new Date(1961, 2, 4), new Date(1963, 10, 22)],
                ['President', 'Lyndon B. Johnson', new Date(1963, 10, 22), new Date(1969, 2, 4)],
                ['President', 'Richard Nixon', new Date(1969, 2, 4), new Date(1974, 7, 8)],
                ['President', 'Gerald Ford', new Date(1974, 7, 8), new Date(1977, 2, 4)],
                ['President', 'Jimmy Carter', new Date(1977, 2, 4), new Date(1981, 2, 4)],
                ['President', 'Ronald Reagan', new Date(1981, 2, 4), new Date(1989, 2, 4)],
                ['President', 'George H. W. Bush', new Date(1989, 2, 4), new Date(1993, 2, 4)],
                ['President', 'Bill Clinton', new Date(1993, 2, 4), new Date(2001, 2, 4)],
                ['President', 'George W. Bush', new Date(2001, 2, 4), new Date(2009, 2, 4)],
                ['President', 'Barack Obama', new Date(2009, 2, 4), new Date(2017, 2, 4)],
                ['President', 'Donald Trump', new Date(2017, 2, 4), new Date(2021, 2, 4)],
                ['President', 'Joe Biden', new Date(2021, 2, 4), new Date()], // Current date for ongoing term



                ['Vice President', 'John Adams', new Date(1789, 3, 21), new Date(1797, 2, 4)],
                ['Vice President', 'Thomas Jefferson', new Date(1797, 2, 4), new Date(1801, 2, 4)],
                ['Vice President', 'Aaron Burr', new Date(1801, 2, 4), new Date(1805, 2, 4)],
                ['Vice President', 'George Clinton', new Date(1805, 2, 4), new Date(1812, 3, 20)],
                ['Vice President', 'Elbridge Gerry', new Date(1813, 2, 4), new Date(1814, 10, 23)],
                ['Vice President', 'Daniel D. Tompkins', new Date(1817, 2, 4), new Date(1825, 2, 4)],
                ['Vice President', 'John C. Calhoun', new Date(1825, 2, 4), new Date(1832, 11, 28)],
                ['Vice President', 'Martin Van Buren', new Date(1833, 2, 4), new Date(1837, 2, 4)],
                ['Vice President', 'Richard M. Johnson', new Date(1837, 2, 4), new Date(1841, 2, 4)],
                ['Vice President', 'John Tyler', new Date(1841, 2, 4), new Date(1841, 3, 4)], // Became President
                ['Vice President', 'George M. Dallas', new Date(1845, 2, 4), new Date(1849, 2, 4)],
                ['Vice President', 'Millard Fillmore', new Date(1849, 2, 4), new Date(1850, 6, 9)], // Became President
                ['Vice President', 'William R. King', new Date(1853, 2, 4), new Date(1853, 3, 18)],
                ['Vice President', 'John C. Breckinridge', new Date(1857, 2, 4), new Date(1861, 2, 4)],
                ['Vice President', 'Hannibal Hamlin', new Date(1861, 2, 4), new Date(1865, 2, 4)],
                ['Vice President', 'Andrew Johnson', new Date(1865, 2, 4), new Date(1865, 3, 15)], // Became President
                ['Vice President', 'Schuyler Colfax', new Date(1869, 2, 4), new Date(1873, 2, 4)],
                ['Vice President', 'Henry Wilson', new Date(1873, 2, 4), new Date(1875, 10, 22)],
                ['Vice President', 'William A. Wheeler', new Date(1877, 2, 4), new Date(1881, 2, 4)],
                ['Vice President', 'Chester A. Arthur', new Date(1881, 2, 4), new Date(1881, 8, 19)], // Became President
                ['Vice President', 'Thomas A. Hendricks', new Date(1885, 2, 4), new Date(1885, 10, 25)],
                ['Vice President', 'Levi P. Morton', new Date(1889, 2, 4), new Date(1893, 2, 4)],
                ['Vice President', 'Adlai E. Stevenson', new Date(1893, 2, 4), new Date(1897, 2, 4)],
                ['Vice President', 'Garret A. Hobart', new Date(1897, 2, 4), new Date(1899, 10, 21)],
                ['Vice President', 'Theodore Roosevelt', new Date(1901, 2, 4), new Date(1901, 8, 14)], // Became President
                ['Vice President', 'Charles W. Fairbanks', new Date(1905, 2, 4), new Date(1909, 2, 4)],
                ['Vice President', 'James S. Sherman', new Date(1909, 2, 4), new Date(1912, 10, 30)],
                ['Vice President', 'Thomas R. Marshall', new Date(1913, 2, 4), new Date(1921, 2, 4)],
                ['Vice President', 'Calvin Coolidge', new Date(1921, 2, 4), new Date(1923, 7, 2)], // Became President
                ['Vice President', 'Charles G. Dawes', new Date(1925, 2, 4), new Date(1929, 2, 4)],
                ['Vice President', 'Charles Curtis', new Date(1929, 2, 4), new Date(1933, 2, 4)],
                ['Vice President', 'John N. Garner', new Date(1933, 2, 4), new Date(1941, 2, 4)],
                ['Vice President', 'Henry A. Wallace', new Date(1941, 2, 4), new Date(1945, 2, 4)],
                ['Vice President', 'Harry S. Truman', new Date(1945, 2, 4), new Date(1945, 3, 12)], // Became President
                ['Vice President', 'Alben W. Barkley', new Date(1949, 2, 4), new Date(1953, 2, 4)],
                ['Vice President', 'Richard Nixon', new Date(1953, 2, 4), new Date(1961, 2, 4)],
                ['Vice President', 'Lyndon B. Johnson', new Date(1961, 2, 4), new Date(1963, 10, 22)], // Became President
                ['Vice President', 'Hubert H. Humphrey', new Date(1965, 2, 4), new Date(1969, 2, 4)],
                ['Vice President', 'Spiro Agnew', new Date(1969, 2, 4), new Date(1973, 9, 10)],
                ['Vice President', 'Gerald Ford', new Date(1973, 11, 6), new Date(1974, 7, 8)], // Became President
                ['Vice President', 'Nelson Rockefeller', new Date(1974, 11, 19), new Date(1977, 2, 4)],
                ['Vice President', 'Walter Mondale', new Date(1977, 2, 4), new Date(1981, 2, 4)],
                ['Vice President', 'George H. W. Bush', new Date(1981, 2, 4), new Date(1989, 2, 4)],
                ['Vice President', 'Dan Quayle', new Date(1989, 2, 4), new Date(1993, 2, 4)],
                ['Vice President', 'Al Gore', new Date(1993, 2, 4), new Date(2001, 2, 4)],
                ['Vice President', 'Dick Cheney', new Date(2001, 2, 4), new Date(2009, 2, 4)],
                ['Vice President', 'Joe Biden', new Date(2009, 2, 4), new Date(2017, 2, 4)],
                ['Vice President', 'Mike Pence', new Date(2017, 2, 4), new Date(2021, 2, 4)],
                ['Vice President', 'Kamala Harris', new Date(2021, 2, 4), new Date()], // Current date for ongoing term


                ['Secretary of State', 'John Jay', new Date(1789, 8, 25), new Date(1790, 2, 22)],
                ['Secretary of State', 'Thomas Jefferson', new Date(1790, 2, 22), new Date(1793, 11, 31)],
                ['Secretary of State', 'Edmund Randolph', new Date(1794, 0, 2), new Date(1795, 7, 20)],
                ['Secretary of State', 'Timothy Pickering', new Date(1795, 7, 20), new Date(1800, 4, 12)],
                ['Secretary of State', 'Charles Lee', new Date(1800, 4, 13), new Date(1800, 5, 5)],
                ['Secretary of State', 'John Marshall', new Date(1800, 5, 13), new Date(1801, 2, 4)],
                ['Secretary of State', 'Levi Lincoln', new Date(1801, 2, 5), new Date(1801, 4, 1)],
                ['Secretary of State', 'James Madison', new Date(1801, 4, 2), new Date(1809, 2, 3)],
                ['Secretary of State', 'Robert Smith', new Date(1809, 2, 6), new Date(1811, 3, 1)],
                ['Secretary of State', 'James Monroe', new Date(1811, 3, 2), new Date(1817, 2, 4)], // Continued as President
                ['Secretary of State', 'John Quincy Adams', new Date(1817, 2, 5), new Date(1825, 2, 4)], // Continued as President
                ['Secretary of State', 'Henry Clay', new Date(1825, 2, 7), new Date(1829, 2, 4)],
                ['Secretary of State', 'Martin Van Buren', new Date(1829, 2, 28), new Date(1831, 4, 23)],
                ['Secretary of State', 'Edward Livingston', new Date(1831, 4, 24), new Date(1833, 4, 29)],
                ['Secretary of State', 'Louis McLane', new Date(1833, 4, 29), new Date(1834, 5, 30)],
                ['Secretary of State', 'John Forsyth', new Date(1834, 6, 27), new Date(1841, 2, 4)],
                ['Secretary of State', 'Daniel Webster', new Date(1841, 2, 6), new Date(1843, 4, 8)],
                ['Secretary of State', 'Abel P. Upshur', new Date(1843, 6, 24), new Date(1844, 2, 28)],
                ['Secretary of State', 'John C. Calhoun', new Date(1844, 3, 1), new Date(1845, 2, 10)],
                ['Secretary of State', 'James Buchanan', new Date(1845, 2, 10), new Date(1849, 2, 7)],
                ['Secretary of State', 'John M. Clayton', new Date(1849, 2, 8), new Date(1850, 6, 22)],
                ['Secretary of State', 'Daniel Webster', new Date(1850, 6, 23), new Date(1852, 9, 24)],
                ['Secretary of State', 'Edward Everett', new Date(1852, 10, 6), new Date(1853, 2, 4)],
                ['Secretary of State', 'William L. Marcy', new Date(1853, 2, 7), new Date(1857, 2, 6)],
                ['Secretary of State', 'Lewis Cass', new Date(1857, 2, 6), new Date(1860, 11, 14)],
                ['Secretary of State', 'Jeremiah S. Black', new Date(1860, 11, 17), new Date(1861, 2, 5)],
                ['Secretary of State', 'William H. Seward', new Date(1861, 2, 5), new Date(1869, 2, 4)],
                ['Secretary of State', 'Elihu B. Washburne', new Date(1869, 2, 5), new Date(1869, 2, 16)],
                ['Secretary of State', 'Hamilton Fish', new Date(1869, 2, 17), new Date(1877, 2, 12)],
                ['Secretary of State', 'William M. Evarts', new Date(1877, 2, 12), new Date(1881, 2, 7)],
                ['Secretary of State', 'James G. Blaine', new Date(1881, 2, 7), new Date(1881, 11, 19)],
                ['Secretary of State', 'Frederick T. Frelinghuysen', new Date(1881, 11, 19), new Date(1885, 2, 6)],
                ['Secretary of State', 'Thomas F. Bayard', new Date(1885, 2, 6), new Date(1889, 2, 6)],
                ['Secretary of State', 'James G. Blaine', new Date(1889, 2, 7), new Date(1892, 5, 4)],
                ['Secretary of State', 'John W. Foster', new Date(1892, 5, 29), new Date(1893, 2, 6)],
                ['Secretary of State', 'Walter Q. Gresham', new Date(1893, 2, 7), new Date(1895, 4, 28)],
                ['Secretary of State', 'Richard Olney', new Date(1895, 5, 10), new Date(1897, 2, 5)],
                ['Secretary of State', 'John Sherman', new Date(1897, 2, 6), new Date(1898, 3, 27)],
                ['Secretary of State', 'William R. Day', new Date(1898, 3, 28), new Date(1898, 8, 16)],
                ['Secretary of State', 'John Hay', new Date(1898, 8, 30), new Date(1905, 6, 1)],
                ['Secretary of State', 'Elihu Root', new Date(1905, 6, 19), new Date(1909, 0, 27)],
                ['Secretary of State', 'Robert Bacon', new Date(1909, 0, 27), new Date(1909, 2, 5)],
                ['Secretary of State', 'Philander C. Knox', new Date(1909, 2, 6), new Date(1913, 2, 5)],
                ['Secretary of State', 'William Jennings Bryan', new Date(1913, 2, 5), new Date(1915, 5, 9)],
                ['Secretary of State', 'Robert Lansing', new Date(1915, 5, 24), new Date(1920, 1, 13)],
                ['Secretary of State', 'Bainbridge Colby', new Date(1920, 2, 23), new Date(1921, 2, 4)],
                ['Secretary of State', 'Charles Evans Hughes', new Date(1921, 2, 5), new Date(1925, 2, 4)],
                ['Secretary of State', 'Frank B. Kellogg', new Date(1925, 2, 5), new Date(1929, 2, 4)],
                ['Secretary of State', 'Henry L. Stimson', new Date(1929, 2, 28), new Date(1933, 2, 4)],
                ['Secretary of State', 'Cordell Hull', new Date(1933, 2, 4), new Date(1944, 10, 30)],
                ['Secretary of State', 'Edward R. Stettinius Jr.', new Date(1944, 11, 1), new Date(1945, 5, 27)],
                ['Secretary of State', 'James F. Byrnes', new Date(1945, 6, 3), new Date(1947, 0, 21)],
                ['Secretary of State', 'George C. Marshall', new Date(1947, 0, 21), new Date(1949, 0, 20)],
                ['Secretary of State', 'Dean Acheson', new Date(1949, 0, 21), new Date(1953, 0, 20)],
                ['Secretary of State', 'John Foster Dulles', new Date(1953, 0, 26), new Date(1959, 4, 24)],
                ['Secretary of State', 'Christian Herter', new Date(1959, 5, 22), new Date(1961, 0, 20)],
                ['Secretary of State', 'Dean Rusk', new Date(1961, 0, 21), new Date(1969, 0, 20)],
                ['Secretary of State', 'William P. Rogers', new Date(1969, 0, 22), new Date(1973, 8, 3)],
                ['Secretary of State', 'Henry Kissinger', new Date(1973, 8, 22), new Date(1977, 0, 20)],
                ['Secretary of State', 'Cyrus Vance', new Date(1977, 0, 23), new Date(1980, 3, 28)],
                ['Secretary of State', 'Edmund Muskie', new Date(1980, 4, 8), new Date(1981, 0, 20)],
                ['Secretary of State', 'Alexander Haig', new Date(1981, 0, 22), new Date(1982, 6, 5)],
                ['Secretary of State', 'George P. Shultz', new Date(1982, 6, 16), new Date(1989, 0, 20)],
                ['Secretary of State', 'James Baker', new Date(1989, 0, 25), new Date(1992, 7, 23)],
                ['Secretary of State', 'Lawrence Eagleburger', new Date(1992, 7, 23), new Date(1993, 0, 20)],
                ['Secretary of State', 'Warren Christopher', new Date(1993, 0, 20), new Date(1997, 0, 17)],
                ['Secretary of State', 'Madeleine Albright', new Date(1997, 0, 23), new Date(2001, 0, 20)],
                ['Secretary of State', 'Colin Powell', new Date(2001, 0, 20), new Date(2005, 0, 26)],
                ['Secretary of State', 'Condoleezza Rice', new Date(2005, 0, 26), new Date(2009, 0, 20)],
                ['Secretary of State', 'Hillary Clinton', new Date(2009, 0, 21), new Date(2013, 1, 1)],
                ['Secretary of State', 'John Kerry', new Date(2013, 1, 1), new Date(2017, 0, 20)],
                ['Secretary of State', 'Rex Tillerson', new Date(2017, 0, 20), new Date(2018, 2, 31)],
                ['Secretary of State', 'Mike Pompeo', new Date(2018, 3, 26), new Date(2021, 0, 20)],
                ['Secretary of State', 'Antony Blinken', new Date(2021, 0, 26), new Date()] // Current date for ongoing term



            ]);
            var options = {
                hAxis: {
                    format: 'yyyy',
                    gridlines: { count: -1, units: { years: { format: ['yyyy'] } } },
                    minorGridlines: { units: { years: { format: ['yyyy'] } } }
                },
                timeline: { showRowLabels: true }
            };
            chart.draw(dataTable, options);
        };

        loadGoogleCharts();
    }, []);

    return (
        <div style={{ width: '100%', overflowX: 'auto' }}>
            <div id="example3.1" style={{ height: '200px', width: '2000px' }}></div>
        </div>
    );
};

export default GoogleTimelineChart;